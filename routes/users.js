import express from 'express'
const router = express.Router()

/* routes */
router.get('/users/signin', (req, res) => {
  res.send('registrando usuario')
})

router.get('/users/signup', (req, res) => {
  res.send('formulario de autenticacion')
})

export default router