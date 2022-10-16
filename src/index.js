import express from 'express'
import path from 'path'

/* inizialisations */
const app = express()



/* settings */
app.set('port', process.env.PORT || 3000)
app.set('views')


/* midlewares */



/* global variables */



/* routes */



/* static files */



/* server inizialising */
app.listen(app.get('port'), () => {
  console.log('server running on port ', app.get('port'))
})
