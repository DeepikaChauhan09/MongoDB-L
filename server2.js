
 const {MongoClient}=require("mongodb")        

 const url="mongodb://localhost:27017"
 const database="cityHospital"
 const connection=new MongoClient(url)       
   //help in connecting(but not exactly connecting here) nodejs nd mongodb. now can use different method provided inbuilt  with this connection

 async function getData()
 {
    let result=await connection.connect()    
            //this-> .connect method will connect nodejs nd mongodb
    const db=result.db(database) 
    //connecting which database to work on
    let collection=db.collection("patients")
    //connecting the collection of that dbase
    let response=  await collection.find().toArray()
    //getting/fetching  all docs prexent in collection, inthe array f object format

    console.log(response)         
    //printing all documents of collection on terminal o/p
 }

 getData();




/*
 The provided code is written in Node.js and it connects to a MongoDB database using the mongodb package. It retrieves data from the "patients" collection in the "cityHospital" database and logs the response to the console.

Here's a breakdown of what the code does:

It imports the MongoClient class from the "mongodb" package.
It sets the connection URL to "mongodb://localhost:27017", which is the default URL for a MongoDB instance running locally on the default port.
It specifies the name of the database as "cityHospital".
It creates a new instance of MongoClient using the connection URL.
It defines an asynchronous function called getData() to retrieve data from the database.
Inside the getData() function, it establishes a connection to the MongoDB server using await connection.connect().
It retrieves a reference to the "cityHospital" database using result.db(database).
It gets a reference to the "patients" collection within the database using db.collection("patients").
It uses the find({}) method to retrieve all documents in the "patients" collection and converts the response to an array using toArray().
Finally, it logs the response array to the console


*/



// The MongoClient class is provided by the MongoDB Node.js driver and is used to establish a connection to a MongoDB server. It allows you to interact with the MongoDB database by providing methods to perform various operations such as connecting, inserting, updating, querying, and deleting data.