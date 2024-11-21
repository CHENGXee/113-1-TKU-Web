const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "411630394";
const collectionName = "studentslist";

(async() =>{
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log("成功連接");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const result = await collection.find().toArray();
        for (each of result){
            console.log(each.姓名);
        }
    }catch(error){
        console.log(error);
    }finally{
        client.close();
    }
})();