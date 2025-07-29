import psycopg2
import tensorflow_hub as hub
import numpy as np

model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
print("Model loaded successfully")

# PostgreSQL configuration
config = {
    'host': 'localhost',
    'database': 'postgres',
    'user': 'seti',
    'password': '', # Replace the password with the password of your postgres instance
    'port': 5432
}

did_you_know_facts = [
    "Eiffel Tower can be 15 centimeters taller during the summer. Due to thermal expansion, the iron structure expands when temperatures rise.",
    "The Amazon Rainforest produces 20% of the world's oxygen.",
    "Mount Everest grows by about a quarter of an inch (0.25 inches) each year.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "The Earth's oceans contain nearly 20 million tons of gold.",
    "Canada has the longest coastline of any country in the world.",
    "The city of Venice, Italy is built on 118 small islands.",
    "The deepest part of the ocean, the Mariana Trench, reaches a depth of about 36,070 feet (10,994 meters).",
    "The world's largest desert is Antarctica.",
    "The human brain is more active during sleep than during the day when awake."
]

# Connect to PostgreSQL database
conn = psycopg2.connect(**config)
cur = conn.cursor()

def vectorize(sentence):
    return model([sentence])[0].numpy().tolist()

def add_data():
    try:
        # Connect to PostgreSQL database
        connection = psycopg2.connect(**config)

        # Create a cursor object
        cursor = connection.cursor()

        # drop old table if it exists 
        cursor.execute("DROP TABLE IF EXISTS didyouknowfacts;")


        # Define SQL query to create table
        create_table_query = '''
            CREATE TABLE IF NOT EXISTS didyouknowfacts (
                id SERIAL PRIMARY KEY,
                fact TEXT,
                embedding REAL[]
            );
        '''

        # Execute the query to create the table
        cursor.execute(create_table_query)
        connection.commit()
        print('Table created successfully')

        # Insert data into the table
        for fact in did_you_know_facts:
            embeddings = vectorize(fact)
            insert_query = '''
                INSERT INTO didyouknowfacts (fact, embedding)
                VALUES (%s, %s);
            '''
            cursor.execute(insert_query, (fact, embeddings))
            connection.commit()

        # Fetch and display the data
        select_query = "SELECT * FROM didyouknowfacts;"
        cursor.execute(select_query)
        rows = cursor.fetchall()
        for row in rows:
            print(row[1], end='\n\n')  # Print the 'sentence' column

    except Error as e:
        print(f"Error connecting to PostgreSQL: {e}")

    finally:
        # Close the connection
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed")

# Function to calculate cosine similarity
def check_similarity(v1, v2):
    dot_product = np.dot(v1, v2)
    norm_a = np.linalg.norm(v1)
    norm_b = np.linalg.norm(v2)
    similarity = dot_product / (norm_a * norm_b)
    return similarity

# Function to search for the closest match
def search_a_match(model, query_str):
    new_vec = model([query_str])[0].numpy()
    cur.execute('SELECT * FROM didyouknowfacts')
    rows = cur.fetchall()
    match_dist = {}
    for row in rows:
        match_dist[row[1]] = check_similarity(row[2], new_vec)
    sorted_matches = sorted(match_dist.items(), key=lambda x: x[1], reverse=True)
    return sorted_matches[0]

# Main function
def main():
    # Load Universal Sentence Encoder model
    model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")
    print("Model loaded successfully")
    add_data()
    fact, score = search_a_match(model, "Which is the largest desert in the world?")
    print(f'The closest match is:\n\"{fact}\"\nwith similarity score: {score: .4f}')
    conn.close()

if __name__ == "__main__":
    main()