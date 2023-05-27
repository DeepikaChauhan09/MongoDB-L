const dbConnection= require("./connection");

async function update()
  {
    const dbc= await dbConnection();
    const res= await dbc.updateOne({name:"siya"}, {$set :{age:"20"}})
    console.log(res)
  
    const res2= await dbc.updateOne({name:"netu arora"}, {$set :{age:"5", name:"netu "}})
    console.log(res2)

    //update many
    const res_many= await dbc.updateMany({name:"beena"}, {$set :{age:"0"}})
    console.log(res_many)
  }

  update()