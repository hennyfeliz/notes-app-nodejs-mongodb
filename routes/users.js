import express from 'express'
const router = express.Router()

/* routes */
router.get('/users/signin', (req, res) => {
  res.render('users/signin')
})

router.get('/users/signup', (req, res) => {
  res.render('users/signup')
})

export default router