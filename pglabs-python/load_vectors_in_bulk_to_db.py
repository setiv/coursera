import psycopg2
import tensorflow_hub as hub
import numpy as np
from psycopg2.extras import execute_values
import json

# PostgreSQL configuration
config = {
    'host': 'localhost',
    'database': 'postgres',
    'user': 'seti',
    'password': '', # Replace with the password for the PostgreSQL instance
    'port': 5432
}

data = [
    'London is the capital of UK'
    'The German train service is called Deutsche Bahn',
    'The trans-siberian railway is the longest train line',
    'The Great Wall of China is the longest man-made structure in the world.',
    'Mount Everest is the highest mountain peak on Earth.',
    'The Sahara Desert is the largest hot desert in the world.',
    'The Nile River is the longest river in the world.',
    'The Amazon Rainforest is the largest tropical rainforest in the world.',
    'The Pacific Ocean is the largest ocean on Earth.',
    'The Statue of Liberty was a gift from France to the United States.',
    'The Eiffel Tower in Paris, France, was originally intended to be a temporary structure.',
    'The Colosseum in Rome, Italy, is one of the largest ancient amphitheaters ever built.'
]


# Connect to PostgreSQL database
conn = psycopg2.connect(**config)
cur = conn.cursor()

# Function to create table
def create_table():
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS worldfacts (
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
    data_with_embedding = []
    for sentence in data:
        embeddings = model([sentence])[0].numpy().tolist()
        data_with_embedding.append((sentence,embeddings))

    # SQL query template
    insert_query = """
    INSERT INTO worldfacts (sentence, embedding)
    VALUES %s
    """

    # Execute the bulk insert
    execute_values(cur, insert_query, data_with_embedding)

    # Commit the transaction
    conn.commit()
    print("Data added to database")

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