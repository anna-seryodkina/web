import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'local';

const client = new MongoClient(url);


try{
    await client.connect();
} catch (e){
    console.error(e);
}

const db = client.db(dbName);

export default db;