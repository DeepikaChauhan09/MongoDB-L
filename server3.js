
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


//fetch/read

 async function read()
 {
    const dbc= await dbConnection()          
    //for read, we have called fun who already has connectionestablished in it
    const response= await dbc.find({age:"20"}).toArray()
    console.log(response)
 }


//  async function add()
//  {
//     const dbc= await dbConnection() 
//      const res=  await dbc.insertOne({ name:"beena", age:"20"})

//      //on saving ctrl+s this line is executing again n again. means beena is adding in mongodb dbase n time on saving n time. this we dont want
           

//      const res_many= await dbc.insertMany([
//         {
//             name:"netu", age:"10"
//         },

//         {
//             name:"kaa", age:"30"
//         }



//      ])
//     console.log(res)
//     console.log(res_many)

//     console.log("add")
//  }


 //update
  async function update()
  {
    const dbc= await dbConnection();
    const res= await dbc.updateOne({name:"siya"}, {$set :{age:"25"}})
    console.log(res)
  
    const res2= await dbc.updateOne({name:"netu sharma"}, {$set :{age:"5", name:"netu arora"}})
    console.log(res2)

    //update many
    const res_many= await dbc.updateMany({name:"beena"}, {$set :{age:"95"}})
    console.log(res_many)
  }
   
   //delete
    async function remove()
    {
      const dbc= await dbConnection()
      const res1= await dbc.deleteOne({name:"kaa"})
       
      console.log(res1)
      if(res1.acknowledged)
      {
         console.log("deleted..........")
      }
      const res2=await dbc.deleteMany({name:"beena"})

      console.log(res2)
      if(res2.acknowledged)
      {
         console.log("deleted..........")
      }

    }












 read()
 add()        //since insert is taking less time as only 1 code there for now. so it will execute first nd then read data will come on o/p terminal

 update()
 remove()