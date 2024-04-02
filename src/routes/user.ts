import express from 'express'
import { newUser } from '../controllers/user.js'

const app = express.Router()


app.post('/login', newUser)


export default app