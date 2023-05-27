
const dbConnection=require("./connection")

 async function add()
 {
    const dbc= await dbConnection() 
     const res=  await dbc.insertOne({ name:"beena", age:"20"})

     //on saving ctrl+s this line is executing again n again. means beena is adding in mongodb dbase n time on saving n time. this we dont want
           

     const res_many= await dbc.insertMany([
        {
            name:"netu", age:"10"
        },

        {
            name:"kaa", age:"30"
        }



     ])
    console.log(res)
    console.log(res_many)

    console.log("add")
 }

 add();