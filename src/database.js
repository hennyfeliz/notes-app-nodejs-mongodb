import mongoose from "mongoose";
mongoose.connect('mongodb://localhost/notes-app', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
.then(db => console.log('db is connected'))
.catch(err => console.log(err))


