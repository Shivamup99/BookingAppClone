import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 8000
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cookieParser());
app.use(cors())
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('database connected')).catch(err=>console.log(err))

import HotelRouter from './routes/hotel.js'
import AuthRoute from './routes/auth.js'
import RoomRoute from './routes/rooms.js'

app.use('/api',HotelRouter)
app.use('/api',AuthRoute)
app.use('/api',RoomRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Somthing went wrong at server side'
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))