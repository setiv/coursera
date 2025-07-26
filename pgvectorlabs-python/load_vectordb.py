import psycopg2
import tensorflow as tf
import tensorflow_hub as hub

# Configuration for PostgreSQL connection
config = {
    'host': 'localhost',
    'database': 'postgres',
    'user': 'seti',
    'password': '',  # Replace with the password of your PostgreSQL instance
    'port': 5432
}

# Function to create an extension and recreate the table
def recreate_table():
    with psycopg2.connect(**config) as conn:
        with conn.cursor() as cur:
            # Ensure the required PostgreSQL extension 'vector' is created
            cur.execute('CREATE EXTENSION IF NOT EXISTS vector')

            # Drop existing 'documents' table if it exists
            # Uncomment the line below if you want to start with a clean table
            # cur.execute('DROP TABLE IF EXISTS documents')

            # Create a new 'documents' table with appropriate schema - notice the Vector datatype being used
            cur.execute('CREATE TABLE IF NOT EXISTS documents (id SERIAL PRIMARY KEY, content TEXT, embedding VECTOR(512))')
            conn.commit()

# Function to insert items into the database
def insert_items():
    # Recreate the database and necessary tables
    recreate_table()

    # Load the universal sentence encoder model
    model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
    print("Model loaded successfully")

    # Define a list of sentences to be inserted into the database
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

    with psycopg2.connect(**config) as conn:
        with conn.cursor() as cur:
            for sentence in sentences:
                # Generate embeddings for the current sentence using the universal sentence encoder model
                embeddings = model([sentence]).numpy().tolist()[0]

                # Insert the sentence and its embeddings into the 'documents' table
                cur.execute('INSERT INTO documents (content, embedding) VALUES (%s, %s)', (sentence, embeddings))

            conn.commit()

            # Query the database to retrieve the first three documents
            cur.execute('SELECT content, embedding FROM documents LIMIT 3')
            rows = cur.fetchall()

            # Display the content and embeddings of the retrieved documents
            for row in rows:
                print(row[0])
                print("\n")
                print(row[1])
                print("\n")

# Call the insert_items function to execute the insertion and retrieval operations
if __name__ == "__main__":
    insert_items()