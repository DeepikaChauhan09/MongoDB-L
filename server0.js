
const {MongoClient}=require("mongodb")        

const url="mongodb://localhost:27017"
const database="cityHospital"
const connection=new MongoClient(url)       

const result= connection.connect()    
           //this-> .connect method will connect nodejs nd mongodb
   const db=result.db(database)            
      🔻🔻🔻🔻🔻🔻🔻🔻🔻   🔻🔻🔻🔻🔻🔻🔻🔻🔻  IMP  🔻🔻
   
   //from here it will start giving error. As this connection in above line will take time. in connecting nodejs with mongodb in our local server . 
          // hence this reult line wont excecute cuz till now connection establish nhi hua hai.

        //hence to hande this we have to make connection.connect line/method as asynchronus. for thatw e have to use async. method(function tyoe making), and then we will be using await nd promise concept too


        // ===>>> means function toh bananea pdega nd that too of asyn type. usme connect establishment with db, coolection vala code aaeyega









   //connecting which database to work on
   let collection=db.collection("patients")

   const dbc=  dbConnection()
    const response=  dbc.find({age:"20"}).toArray()
    console.log(response)


    // {WONT WORK ,,,ERROR THROWING}