import mongoose from 'mongoose';


const EmailSchema = new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    subject:String,
    body:String,
    date:{
        type:String,
        required:true
    },
    image:String,
    name:{
        type:String,
        required:true
    },
    starred:{
        type:Boolean,
        required:true,
        default:false
    },
    trash:{
        type:Boolean,
        required:true,
        default:false
    },
    type:{
        type:String,
        required:true
    }
})


const Email=mongoose.model('emails',EmailSchema);

export default Email;