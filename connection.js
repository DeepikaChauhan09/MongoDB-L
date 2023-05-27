const {MongoClient}=require("mongodb")        

const url="mongodb://localhost:27017"
const database="cityHospital"
const connection=new MongoClient(url)       
  //help in connecting(but not exactly connecting here) nodejs nd mongodb. now can use different method provided inbuilt  with this connection

async function dbConnection()
{
   let result=await connection.connect()    
           //this-> .connect method will connect nodejs nd mongodb
   const db=result.db(database) 
   //connecting which database to work on
   let collection=db.collection("patients")
   //connecting the collection of that dbase

   return collection;       //retn coolection cuz we have to work on collletion. as doc. is there
}

module.exports=dbConnection;