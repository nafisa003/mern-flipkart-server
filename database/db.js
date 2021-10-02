
import  mongoose  from "mongoose";

const Connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerceweb.xecb6.mongodb.net/ECommerceWeb?retryWrites=true&w=majority`;
 try{
    await mongoose.connect(URL,{useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    console.log("Database connected successfully!")
 }
 catch(err){
       console.log("error: ",err.message)
 }
};
export default Connection;

