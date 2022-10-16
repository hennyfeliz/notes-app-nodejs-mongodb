import express from 'express'
const router = express.Router()

/* routes */
router.get('/signin', (req, res) => {
  res.send('registrando usuario')
})

router.get('/signup', (req, res) => {
  res.send('formulario de autenticacion')
})

module.exports = router