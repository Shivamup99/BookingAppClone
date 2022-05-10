import express from 'express'
import { createHotel, deleteHotel, getaHotel, getAllHotel, updateHotel ,getCityHotel,getTypeHotel, getHotelRooms } from '../controllers/hotel.js'
import { verifyAdmin } from '../util/verifyToken.js'

const router = express.Router()

router.post('/hotel',verifyAdmin,createHotel)
router.get('/hotel',getAllHotel)
router.put('/hotel/:id',verifyAdmin,updateHotel)

router.delete('/hotel/:id',verifyAdmin,deleteHotel)
router.get('/hotel/find/:id',getaHotel)

router.get('/hotel/countByCity',getCityHotel)
router.get('/hotel/countByType',getTypeHotel)
router.get('/hotel/rooms/:id',getHotelRooms)

export default router