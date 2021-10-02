import User from '../model/userSchema.js'



export const userSignup=async (request,response)=>{
   try{
    const exist= await User.findOne({username:request.body.username})
    if(exist){
        return response.status(401).json("User already exists!")
    }
     const user=request.body;
     const newUser=new User(user)
     await newUser.save()

     response.status(200).json("User is successfully registered")
   }
   catch(err)
   {
       console.log(err.message)
   }
}

export const userLogIn=async (request,response)=>{
    try{
        let user= await User.findOne({username:request.body.username,password:request.body.password})
        if(user){
            return response.status(200).json(`${request.body.username} login successful`) 
        }  
        else
        {
           return response.status(400).json("Invalid login")  
        } 
    }
    catch(err){
        console.log(err.message)
    }
}