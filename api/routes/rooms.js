import express from 'express'
import { createRoom, deleteRoom, getAllRoom, getaRoom, updateRoom } from '../controllers/rooms.js'
import { verifyAdmin } from '../util/verifyToken.js'

const router = express.Router()

router.post('/room/:hotelid',verifyAdmin,createRoom)
router.get('/room',getAllRoom)
router.put('/room/:id',verifyAdmin,updateRoom)
router.delete('/room/:id/:hotelid',verifyAdmin,deleteRoom)
router.get('/room/:id',getaRoom)

export default router