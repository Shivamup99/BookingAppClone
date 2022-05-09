import mongoose from 'mongoose'

const createRoomsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:[{number:Number,unavailableDates:{type:[Date]}}]
},{timestamps:true})

const roomsSchema = mongoose.model('Rooms',createRoomsSchema)
export default roomsSchema