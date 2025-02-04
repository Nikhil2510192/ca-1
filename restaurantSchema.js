const mongoose = require('mongoose')
const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type:String,
        required: true,
    },
    items:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'items'
        }
    ]
})
module.exports=mongoose.model('restaurantSchema',itemSchema)