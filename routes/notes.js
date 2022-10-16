import express from 'express'
const router = express.Router()

/* routes */

/* GET */
router.get('/notes/add', (req, res) => {
  res.render('notes/new-note')
})

/* POST */
router.post('/notes/new-note', (req, res) => {
  console.log(req.body)
  res.send('ok')
})


/* PUT */


/* DELETE */
export default router
