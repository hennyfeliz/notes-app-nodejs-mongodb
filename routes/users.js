import express from 'express'
const router = express.Router()
import '../models/User.js'
import User from '../models/User.js'
import passport from 'passport'

/* routes */
router.get('/users/signin', (req, res) => {
  res.render('users/signin')
})

/* SIGNIN FOR USERS */
router.get('/users/signup', (req, res) => {
  res.render('users/signup')
})

/* AUTHENTICATION WITH PASSPORT */
router.post('/users/signin', passport.authenticate('local', {
  successRedirect: '/notes',
  failureRedirect: '/users/signin',
  failureFlash: true
}))


/* POST FOR USERS */
router.post('/users/signup', async (req, res) => {
  const {name, email, password, confirm_password} = req.body

  const errors = []

  if(!password != confirm_password) errors.push({ text: 'password dont match!' })

  if(password.email < 4) errors.push({ text: 'password lenght must be mayor than 4 characters!'})

  if(name.length <= 0) errors.push({ text: 'please, insert your name...' })

  if(errors.length > 0) {
    res.render('users/signup', {
      errors, name, email, password, confirm_password
    })
  } else {
    const emailUser = User.findOne({
      email: email
    })

    if(emailUser){
      req.flash('error_msg', 'the email is already used')
      res.redirect('/users/signup')
    }

    const newUser = new User({
      name,
      email,
      password
    })
    newUser.password = newUser.encryptPassword(password)
    await newUser.save()
    req.flash('success_msg', 'youre registered!')
    res.redirect('/users/signin')
  }
})

router.get('/users/logout', (req, res) => {
  req.logout
  res.redirect('/')
})

export default router
