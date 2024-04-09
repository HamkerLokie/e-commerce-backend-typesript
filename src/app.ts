import express from 'express'
import userRoutes from './routes/user.js'
import productRoutes from './routes/products.js'
import orderRoutes from './routes/orders.js'
import { connectDB } from './db/index.js'
import { errorMiddleware } from './middlewares/error.js'
import NodeCache from 'node-cache'
import morgan from 'morgan'
const PORT = 8080

connectDB()
const app = express()

export const myCache = new NodeCache()

app.use(express.json({ limit: '1mb' }))
app.use(morgan("dev"))
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/order', orderRoutes)

app.use('/uploads', express.static('uploads'))
app.use(errorMiddleware)
app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`)
})
