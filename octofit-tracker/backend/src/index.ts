import express from 'express'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 8000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker API' })
})

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch(err => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
