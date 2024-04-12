import { config } from 'dotenv'
config()

export interface EnvironmentVariables {
  PORT: string
  MONGODB_URI: string
  CORS_ORIGIN: string
  ACCESS_TOKEN_SECRET: string
  ACCESS_TOKEN_EXPIRY: string
  REFRESH_TOKEN_SECRET: string
  REFRESH_TOKEN_EXPIRY: string
  CLOUDINARY_NAME: string
  CLOUDINARY_API_KEY: string
  CLOUDINARY_API_SECRET: string
  STRIPE_KEY:string
  PRODUCT_PER_PAGE:string
}

export const {
  PORT,
  MONGODB_URI,
  CORS_ORIGIN,
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  PRODUCT_PER_PAGE,
  STRIPE_KEY
}: EnvironmentVariables = process.env as any
