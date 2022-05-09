import authSchema from "../modals/authModal.js";
import bcrypt from 'bcryptjs'
import { createError } from "../util/error.js";
import jwt from 'jsonwebtoken'
export const register = async(req,res,next)=>{
  try {
      const salt = bcrypt.genSaltSync(10)
      const hash =  bcrypt.hashSync(req.body.password,salt)
      const newUser = new authSchema({
          username:req.body.username,
          name:req.body.name,
          email:req.body.email,
          password:hash,
          isAdmin:req.body.isAdmin
      })
      await newUser.save()
      res.status(201).json(newUser)
  } catch (error) {
      next(error)
  }
} 

export const login = async(req,res,next)=>{
    try {
        const user = await authSchema.findOne({email:req.body.email})
        if(!user) return next(createError(404,'User not found'))
        const isPasswordCorrect = bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return next(createError(400,'Wrong password'))
        
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT_SECRET)
        const {password, isAdmin, ...otherDetails} = user._doc
        res.cookie("access_token",token,{httpOnly:true}).status(201).json({...otherDetails})
    } catch (error) {
        next(error)
    }
  } 