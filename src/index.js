import express from 'express'
import path from 'path'
import exphns from 'express-handlebars'

/* inizialisations */
const app = express()



/* settings */
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphns({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views', 'layouts')),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')


/* midlewares */



/* global variables */



/* routes */



/* static files */



/* server inizialising */
app.listen(app.get('port'), () => {
  console.log('server running on port ', app.get('port'))
})
