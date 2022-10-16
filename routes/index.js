import express from 'express'
const router = express.Router()

/* routes */
router.get('/index/', (req, res) => {
  res.send('index...')
})

router.get('/about', (req, res) => {
  res.send('about...')
})


export default router