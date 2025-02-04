const mongoose = require('mongoose')
const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://nikhilpagadala2006:12345678q@cluster0.lzb2b.mongodb.net/")
        console.log("connected to mongoDB")
    }catch(error){
        console.log("error")
    }
}
