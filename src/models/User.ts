import mongoose, { Schema } from 'mongoose'
import validator from 'validator'

interface IUser extends Document {
  _id: string
  name: string
  photo: string
  email: string
  role: 'admin' | 'user'
  gender: 'male' | 'female'
  dob: Date
  createdAt: Date
  updatedAt: Date
  age: number // vitual attribute
}

const UserSchema = new mongoose.Schema(
  {
    _id: { type: String, required: [true, 'Please enter ID'] },
    name: { type: String, required: [true, 'Please Enter Name'] },
    email: {
      type: String,
      unique: [true, 'Email Already Exists'],
      required: [true, 'Please Enter Email'],
      validate: validator.default.isEmail
    },
    photo: { type: String, required: [true, 'Please Add Photo'] },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: [true, 'Please Enter gender']
    },
    dob: {
      type: Date,
      required: [true, 'Please Enter Date of Birth']
    }
  },
  { timestamps: true }
)

UserSchema.virtual('age').get(function () {
  const today = new Date()

  const dob: Date = this.dob
  let age = today.getFullYear() - dob.getFullYear()

  if (today.getMonth() <= dob.getMonth() && today.getDate() < dob.getDate()) {
    age--
  }

  
  return age
})

export const User = mongoose.model<IUser>('User', UserSchema)
