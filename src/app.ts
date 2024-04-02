import express from 'express'
import userRoutes from './routes/user.js'
import { connectDB } from './db/index.js'
import { errorMiddleware } from './middlewares/error.js'
const PORT = 8080

connectDB()
const app = express()

app.use(express.json({ limit: '1mb' }))

app.use('/api/v1/user/', userRoutes)

app.use(errorMiddleware)
app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`)
})
