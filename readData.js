
const dbConnection= require("./connection");

 async function read()
 {
    const dbc= await dbConnection()          
    //for read, we have called fun who already has connectionestablished in it
    const response= await dbc.find({age:"20"}).toArray()
    console.log(response)
 }

 read();
