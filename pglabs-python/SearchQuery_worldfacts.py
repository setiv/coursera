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

# Connect to PostgreSQL database
conn = psycopg2.connect(**config)
cur = conn.cursor()

# Function to search for the closest match
def search_a_match(model, query_str):
    new_vec = model([query_str])[0].numpy().tolist()

    # # Convert the embeddings to a JSON string
    # embeddings_json = json.dumps(new_vec)

    # Define the SQL query with a parameterized query
    sql_query = "SELECT sentence FROM worldfacts ORDER BY embedding <=> %s::vector LIMIT 1"

    # Execute the SQL query with the embeddings as a parameter
    cur.execute(sql_query, (new_vec,))

    # Fetch the result
    result = cur.fetchone()

    return result

# Main function
def main():
    # Load Universal Sentence Encoder model
    model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
    print("Model loaded successfully")
    question = "Which is the longest river?"
    result = search_a_match(model, question)
    print("The closest match to the question: {} is \n {}".format(question,result))
    conn.close()

if __name__ == "__main__":
    main()