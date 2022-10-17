import { Schema } from "mongoose";
import bcrypt from 'bcryptjs'

const newUser = new Schema({
  name: {
    String,
    required: true
  },
  email: {
    String,
    required: true
  },
  password: {
    String, 
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

/* ENCRYPY PASSWORDSS */
newUser.methods.encryptPassword = async(password) => {
  const salt = await bcrypt.genSalt(10)
  const hash = bcrypt.hash(password, salt)
  return hash
}

/* COMPARE PASSWORS */
newUser.methods.matchPassword = async function(password){
  return await bcrypt.compare(password, this.password)
}


export default mongoose.model('User', newUser)

