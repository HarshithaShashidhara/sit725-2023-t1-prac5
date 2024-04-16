

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://harshitha28111999:StGl7GWh6aLYeB83@cluster0.myn2ntp.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let collection;

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB successfully");
        const database = client.db("cards");
        collection = database.collection("Cat");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = {
    connectToMongoDB,
    getCollection: () => collection
};
