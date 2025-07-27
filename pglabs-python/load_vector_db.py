import psycopg2
import tensorflow_hub as hub
import numpy as np

# PostgreSQL configuration
config = {
    'host': 'localhost',
    'database': 'postgres',
    'user': 'seti',
    'password': '',
    'port': 5432
}

# List of sentences
sentences = [
    "The horse is galloping",
    "The owl is hooting",
    "The rabbit is hopping",
    "The koala is munching",
    "The penguin is waddling",
    "The kangaroo is hopping",
    "The fox is prowling",
    "The parrot is squawking",
    "The turtle is crawling",
    "The cheetah is sprinting"
]

# Connect to PostgreSQL database
conn = psycopg2.connect(**config)
cur = conn.cursor()

# Function to create table
def create_table():
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS mysentences (
        id SERIAL PRIMARY KEY,
        sentence TEXT,
        embedding vector
    )
    '''
    cur.execute(create_table_query)
    print('Table created successfully')
    conn.commit()

# Function to create extension
def create_extension():
    create_extension = '''
    CREATE EXTENSION IF NOT EXISTS vector
    '''
    cur.execute(create_extension)
    print('Extension created successfully')
    conn.commit()

# Function to insert data
def insert_data(model):
    for sentence in sentences:
        embeddings = model([sentence])[0].numpy().tolist()
        cur.execute('INSERT INTO mysentences (sentence, embedding) VALUES (%s, %s)', (sentence, embeddings))
    conn.commit()

# Main function
def main():
    # Load Universal Sentence Encoder model
    model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
    print("Model loaded successfully")
    create_extension()
    create_table()
    insert_data(model)
    conn.close()

if __name__ == "__main__":
    main()