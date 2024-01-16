import mongoose from 'mongoose'


const Connection = ()=>{
    const DB_URI="mongodb+srv://dhana:dhana123@cluster0.zsnb4hv.mongodb.net/?retryWrites=true&w=majority";
    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log("Database connected Successfully");

    }catch(error){
        console.log('error while connecting with the database');
    }
}

export default Connection;