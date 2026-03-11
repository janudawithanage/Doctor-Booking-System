import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import appointmentRouter from './routes/appointmentRoute.js'

// App Config
const app = express()
const PORT = process.env.PORT || 4000

// Connect to MongoDB
connectDB()

// Middlewares
app.use(express.json())
app.use(cors())

// API Routes
app.use('/api/user', userRouter)
app.use('/api/doctors', doctorRouter)
app.use('/api/appointments', appointmentRouter)

// Health check
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Doctor Booking API is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
