import express from 'express'

import { connectDB } from './db/index.js'
import { errorMiddleware } from './middlewares/error.js'
import NodeCache from 'node-cache'
import morgan from 'morgan'
import cors from 'cors'

import userRoutes from './routes/user.js'
import productRoutes from './routes/products.js'
import orderRoutes from './routes/orders.js'
import paymentRoutes from './routes/payemts.js'
import dashboardRoute from './routes/stats.js'
import Stripe from 'stripe'
import { STRIPE_KEY } from './config/index.js'

const PORT = 8080

connectDB()
const app = express()

export const stripe = new Stripe(STRIPE_KEY)
export const myCache = new NodeCache()

app.use(express.json({ limit: '1mb' }))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
  res.send('API Working with /api/v1')
})

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/order', orderRoutes)
app.use('/api/v1/payment', paymentRoutes)
app.use('/api/v1/dashboard', dashboardRoute)

app.use('/uploads', express.static('uploads'))
app.use(errorMiddleware)
app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`)
})
