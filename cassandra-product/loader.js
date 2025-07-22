const fs = require('fs');
const csv = require('csv-parser');
const { connectToCassandra, ensureKeyspaceAndTable, vectorizeText, closeCassandraConnection, TimeUuid, CASSANDRA_KEYSPACE, CASSANDRA_TABLE } = require('./util');

async function loadVectorizedData() {
    const client = await connectToCassandra(); 
    await ensureKeyspaceAndTable();

    const operations = []; 

    const dataStream = fs.createReadStream('./data/products.csv')
        .pipe(csv())
        .on('data', (row) => {
            dataStream.pause();

            const operation = async () => {
                try {
                    const title = row['reviews.title'] ? row['reviews.title'].replace(/'/g, "''") : '';
                    console.log(`Read title: ${title}`);
                    const embedding = await vectorizeText(title);
                    const embeddingStr = embedding.map(value => value.toFixed(6)).join(',');

                    const query = `INSERT INTO ${CASSANDRA_KEYSPACE}.${CASSANDRA_TABLE} (
                        id, asins, brand, categories, colors, dateAdded, dateUpdated, reviews_title, reviews_userCity, 
                        reviews_userProvince, reviews_username, embedding) 
                    VALUES (
                        ${TimeUuid.now()}, 
                        '${row['asins']}', 
                        '${row['brand']}', 
                        '${row['categories']}', 
                        '${row['colors']}', 
                        '${row['dateAdded']}', 
                        '${row['dateUpdated']}', 
                        '${title}', 
                        '${row['reviews.userCity']}', 
                        '${row['reviews.userProvince']}', 
                        '${row['reviews.username']}', 
                        [${embeddingStr}]
                    );`;

                    await client.execute(query);
                } catch (error) {
                    console.error('Error inserting data:', error);
                } finally {
                    dataStream.resume();
                }
            };

            operations.push(operation());
        })
        .on('end', async () => {
            await Promise.all(operations);
            await closeCassandraConnection();
            console.log('Finished loading data');
        });

    dataStream.read(); 
}

loadVectorizedData();
