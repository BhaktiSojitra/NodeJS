const mongoose=require('mongoose');
const schema=mongoose.Schema({
    id:Number,
    name:String,
    rollno:Number,
    SPI:Number,
    branch:String,
});

module.exports=mongoose.model("Student",schema);