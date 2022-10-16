import express from 'express'
const router = express.Router()

/* routes */
router.get('/notes', (req, res) => {
  res.send('notes from db')
})


export default router
