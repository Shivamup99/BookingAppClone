import User from '../modals/authModal.js'
import { createError } from "../util/error.js"

export const getAllUser = async(req,res,next)=>{
    // const failed = true
    // if(failed) return next(createError(401,'you are not authorized'))
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
       next(error)
    }
}
export const getaUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


export const updateUser =async(req,res,next)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

export const deleteUser =async(req,res,next)=>{
    try {
         await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user deleted successfully')
    } catch (error) {
        next(error)
    }
}