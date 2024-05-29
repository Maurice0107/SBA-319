//connection module to mongo db database always look the same 
import{MongoClient} from "mongodb"; 
import dotenv from 'dotenv'; 
dotenv.config()
console.log(process.env)
const client = new MongoClient(process.env.ATLAS_URI) || "dd"; 

let conn;

try{
    conn = await client.connect();
} catch (e) {
console.log(e);
}

const db = conn.db('Sba319'); // connecting to database

export default db;