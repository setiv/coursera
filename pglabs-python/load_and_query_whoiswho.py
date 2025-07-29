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
    'Albert Einstein, is a German-born theoretical physicist, is best known for developing the theory of relativity.',
    'Marie Curie, is a Polish-born physicist and chemist, was the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields.',
    'Leonardo da Vinci, is an Italian polymath of the Renaissance period, is widely regarded as one of the greatest painters of all time and a universal genius.',
    'Mahatma Gandhi, is an Indian lawyer, anti-colonial nationalist, and political ethicist, led India to independence through nonviolent civil disobedience.',
    'Nelson Mandela, is a South African anti-apartheid revolutionary and politician, served as President of South Africa from 1994 to 1999, becoming the country\'s first black head of state and the first elected in a fully representative democratic election.',
    'William Shakespeare, is an English playwright and poet, is often called England\'s national poet and the "Bard of Avon". He is widely regarded as the greatest writer in the English language and the world\'s greatest dramatist.',
    'Rosa Parks, is an African American civil rights activist, is best known for her pivotal role in the Montgomery bus boycott, which helped spark the civil rights movement in the United States.',
    'Mother Teresa, is a Roman Catholic nun and missionary, founded the Missionaries of Charity, a religious congregation dedicated to helping the poor, and won the Nobel Peace Prize in 1979.',
    'Leonardo DiCaprio, is an American actor, film producer, and environmentalist, has won numerous awards, including an Academy Award for Best Actor, and is known for his roles in films such as Titanic, Inception, and The Revenant.',
    'Elon Musk, a South African-born entrepreneur and CEO of Tesla, Inc., SpaceX, and Neuralink, is known for his ambitious projects in space exploration, electric vehicles, and artificial intelligence.'
    ]



# Connect to PostgreSQL database
conn = psycopg2.connect(**config)
cur = conn.cursor()

# Function to create table
def create_table():
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS whoiswho (
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
    INSERT INTO whoiswho (sentence, embedding)
    VALUES %s
    """

    # Execute the bulk insert
    execute_values(cur, insert_query, data_with_embedding)

    # Commit the transaction
    conn.commit()
    print("Data added to database")

# Function to search for the closest match
def search_a_match(model, query_str):
    new_vec = model([query_str])[0].numpy().tolist()

    # # Convert the embeddings to a JSON string
    # embeddings_json = json.dumps(new_vec)

    # Define the SQL query with a parameterized query
    sql_query = "SELECT sentence FROM whoiswho ORDER BY embedding <=> %s::vector LIMIT 1"

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
    create_extension()
    create_table()
    insert_data(model)
    result = search_a_match(model, "Who is William Shakespeare?")
    print(f'The closest match is: "{result}"')
    conn.close()

if __name__ == "__main__":
    main()