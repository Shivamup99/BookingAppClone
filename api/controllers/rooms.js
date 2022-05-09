import Rooms from '../modals/rooms.js'
import Hotel from '../modals/hotelModal.js'

export const createRoom = async (req,res,next)=>{
    const hotelId = req.params.hotelid;
    const newRoom = new Rooms(req.body)
    try {
        const savedRoom = await newRoom.save()
        await Hotel.findByIdAndUpdate(hotelId,{
            $push:{rooms:savedRoom._id}
        })
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}


export const getAllRoom = async(req,res,next)=>{
    // const failed = true
    // if(failed) return next(createError(401,'you are not authorized'))
    try {
        const room = await Rooms.find()
        res.status(200).json(room)
    } catch (error) {
       next(error)
    }
}
export const getaRoom = async(req,res,next)=>{
    try {
        const room = await Rooms.findById(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}


export const updateRoom =async(req,res,next)=>{
    try {
        const room = await Rooms.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(201).json(room)
    } catch (error) {
        next(error)
    }
}

export const deleteRoom =async(req,res,next)=>{
    const hotelId = req.params.hotelid;
    try {
         await Rooms.findByIdAndDelete(req.params.id)
         await Hotel.findByIdAndUpdate(hotelId,{
             $pull:{rooms:req.params.id}
         })
        res.status(200).json('Room deleted successfully')
    } catch (error) {
        next(error)
    }
}