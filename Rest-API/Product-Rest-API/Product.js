const mongoose=require('mongoose');
const schema=mongoose.Schema({
    id:Number,
    Name:String,
	Price:Number,
	Quantity:Number,
	Category:String,
	Description:String,
});

module.exports=mongoose.model("Product",schema);