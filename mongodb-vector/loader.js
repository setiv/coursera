    const newsArray = require('./data/newsData.json');
    const { vectorizeText, connectToMongoDB, closeMongoDBConnection, MONGO_COLLECTION } = require('./util');

    async function loadVectorizedData() {
        const db = await connectToMongoDB();
        const collection = db.collection(MONGO_COLLECTION);

        try {
    
            for (const newsItem of newsArray) {
                const text = newsItem.short_description;
                const description_vector = await vectorizeText(text);

                if (description_vector && description_vector.length > 0) {
                    await collection.updateOne(
                        {link: newsItem.link},
                        { 
                            $set: {
                                headline: newsItem.headline,
                                category: newsItem.category,
                                short_description: newsItem.short_description,
                                authors: newsItem.authors,
                                date: newsItem.date,
                                description_vector: description_vector
                            }
                        },
                        { upsert: true }
                    );
                    console.log('Vectorized data stored in MongoDB Atlas for:', newsItem.headline);
                } else {
                    console.log('No vectors were generated for:', newsItem.headline);
                }
            }
        } catch (error) {
            console.error('Error during data loading:', error);
        } finally {
            await closeMongoDBConnection();
        }
    }

    loadVectorizedData();