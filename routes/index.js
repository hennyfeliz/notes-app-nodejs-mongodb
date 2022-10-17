import express from 'express'
const router = express.Router()

/* routes */
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/about', (req, res) => {
  res.render('about')
})

export default router