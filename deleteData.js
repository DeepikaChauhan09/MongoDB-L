   const dbConnection= require("./connection");
   
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

remove()