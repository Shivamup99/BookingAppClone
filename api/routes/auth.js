import express from 'express'
import { login, register } from '../controllers/auth.js'
import { deleteUser, getAllUser,getaUser, updateUser } from '../controllers/user.js'
import { verifyAdmin, verifyUser } from '../util/verifyToken.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/user',verifyAdmin,getAllUser)
router.get('/user/:id',verifyUser,getaUser)
router.put('/user/:id',verifyUser,updateUser)
router.delete('/user/:id',verifyUser,deleteUser)

export default router