import express from 'express'
import path from 'path'
import exphbs from 'express-handlebars'
import methodOverride from 'method-override'
import expressSessions from 'express-session'
import { fileURLToPath } from 'url'

/* inizialisations */
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import './database.js'
import indexRoutes from '../routes/index.js'
import notesRoutes from '../routes/notes.js'
import usersRoutes from '../routes/users.js'

/* settings */
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')


/* midlewares */
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(expressSessions({
  secret: 'mysecreatapp',
  resave: true,
  saveUninitialized: true
}))

/* global variables */



/* routes */

app.use(indexRoutes)
app.use(notesRoutes)
app.use(usersRoutes)



/* static files */
app.use(express.static(path.join(__dirname, 'public')))


/* server inizialising */
app.listen(app.get('port'), () => {
  console.log('server running on port 3000')
})
