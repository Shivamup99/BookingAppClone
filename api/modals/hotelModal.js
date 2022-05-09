import mongoose from 'mongoose'

const createhotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    photos:{
        type:[String]
    },
    description:{
        type:String,
        required:true
    },
    rooms:{
        type:[String]
    },
    ratings:{
       type:Number,
       min:0,
       max:5
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
})

const hotelScema = mongoose.model('Hotel',createhotelSchema)
export default hotelScema