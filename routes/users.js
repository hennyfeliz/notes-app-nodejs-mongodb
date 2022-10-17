import express from 'express'
const router = express.Router()

/* routes */
router.get('/users/signin', (req, res) => {
  res.render('users/signin')
})

router.get('/users/signup', (req, res) => {
  res.render('users/signup')
})

router.post('/users/signup', (req, res) => {
  const {name, email, password, confirm_password} = req.body

  const errors = []

  if(!password != confirm_password) errors.push({
    text: 'password dont match!'
  })

  if(password.email < 4) errors.push({
    text: 'password lenght must be mayor than 4 characters!'
  })

  if(errors.length > 0) {
    res.render('users/signup', {
      errors, name, email, password, confirm_password
    })
  } else {
    res.send('ok')
  }

})

export default router