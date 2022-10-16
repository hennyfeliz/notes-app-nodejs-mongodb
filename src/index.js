import express from 'express'

/* inizialisations */
const app = express()



/* settings */
app.set('port', process.env.PORT || 3000)


/* midlewares */



/* global variables */



/* routes */



/* static files */



/* server inizialising */
app.listen(app.get('port'), () => {
  console.log('server running on port ', app.get('port'))
})
