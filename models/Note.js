import mongoose, { Schema } from 'mongoose'


const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String
  }
})

export default mongoose.model('Note', noteSchema)
