import mongoose from "mongoose"
import { Schema } from mongoose


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
  }
})

export default mongoose.model('Note', NoteSchema)
