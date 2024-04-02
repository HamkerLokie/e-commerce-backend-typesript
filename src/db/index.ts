import mongoose from 'mongoose'
import { MONGODB_URI } from '../config/index.js'
export const connectDB = () => {
  mongoose
    .connect(MONGODB_URI, { dbName: 'Ecommerce' })
    .then(c => {
      console.log('----Database Connected----', `${c.connection.host}`)
    })
    .catch(error => {
      console.log(error)
      process.exit(1)
    })
}
