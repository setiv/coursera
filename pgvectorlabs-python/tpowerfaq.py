import psycopg
import tensorflow_hub as hub
import numpy as np
import sys
sys.path.append("/Users/Seti/Documents/GitHub/coursera/pgvector")
from pgvector.psycopg import register_vector

# Configuration for PostgreSQL connection
config = {
    'host': 'localhost',
    'dbname': 'postgres',
    'user': 'seti',
    'password': '',  # Replace with the password of your PostgreSQL instance
    'port': 5432
}

# Function to create an extension and recreate the table
def recreate_table():
    conn = psycopg.connect(**config)
    cur = conn.cursor()

    # Ensure the required PostgreSQL extension 'vector' is created
    cur.execute('CREATE EXTENSION IF NOT EXISTS vector')
    cur.execute('DROP TABLE IF EXISTS tpower')
    cur.execute('CREATE TABLE IF NOT EXISTS tpower (id SERIAL PRIMARY KEY, question TEXT, embedding VECTOR(512), answer TEXT)')

    conn.commit()
    cur.close()
    conn.close()

# Function to insert items into the database
def insert_items():
    recreate_table()

    # Load the universal sentence encoder model
    model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

    conn = psycopg.connect(**config)
    cur = conn.cursor()

    # Register the pgvector extension
    register_vector(conn)

    q_and_a = [
        {
            "question": "How do I order a TPower?",
            "answer": "Come to our DIY studio to check out our latest offerings and place your order. The cost and wait time will differ based on your design."
        },
        {
            "question": "Is it possible to test drive?",
            "answer": "This option is not available yet."
        },
        {
            "question": "I have questions regarding the order placed. Is there a way to get clarification?",
            "answer": "Please call us on our toll-free number, 1800180000."
        },
        {
            "question": "I just designed my TPower and submitted my order. What are the next steps?",
            "answer": "As your delivery date approaches, we'll contact you to confirm your registration, payment method, and other related matters."
        },
        {
            "question": "Can I alter the design at any point in time before the delivery?",
            "answer": "Please finalize your order and make a payment only when you are very sure about what you want."
        },
        {
            "question": "How long will it take from the time the payment is made?",
            "answer": "It will take between 4 to 6 weeks, depending on the design customization. You will be contacted two days prior to delivery."
        },
        {
            "question": "Is there a provision to withdraw the order?",
            "answer": "Yes. Your TPower consultant can help with that. However, the initial booking fee will not be refunded."
        }
    ]

    # Iterate over each sentence and insert it into the database
    for faq in q_and_a:
        # Generate embeddings for the current sentence using the universal sentence encoder model
        embeddings = model([faq["question"]]).numpy().tolist()[0]

        # Insert the sentence and its embeddings into the 'tpower' table
        cur.execute(
            'INSERT INTO tpower (question, embedding, answer) VALUES (%s, %s, %s)',
            (faq["question"], embeddings, faq["answer"])
        )

    conn.commit()

    cur.execute('SELECT question, embedding, answer FROM tpower LIMIT 3')
    rows = cur.fetchall()

    for row in rows:
        print(f"Question: {row[0]}")
        print(f"Answer: {row[2]}")

    cur.close()
    conn.close()

# Call the insert_items function to execute the insertion and retrieval operations
insert_items()