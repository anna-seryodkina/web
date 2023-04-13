import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = 'Students';

const client = new MongoClient(url);


try{
    await client.connect();
} catch (e){
    console.error(e);
}

const db = client.db(dbName);

export default db;