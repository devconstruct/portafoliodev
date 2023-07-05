const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');

//Inicializacion
const app = express();
require('./lib/passport');

//Configuracion
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//Midlewares
app.use(session({
  secret: 'sesion iniciada',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


//Variables globales
app.use((req, res, next) => {
  app.locals.success = req.flash('success');
  app.locals.message = req.flash('message');
  app.locals.user = req.user;
  next();
});


//Rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/profile', require('./routes/profile'));
app.use('/matricula', require('./routes/matricula'));
app.use('/newmatricula', require('./routes/newmatricula'));
app.use('/allmatricula', require('./routes/allmatricula'));
app.use('/escuela', require('./routes/escuela'));
app.use('/calificaciones', require('./routes/calificaciones'));
app.use('/allcalificaciones', require('./routes/allcalificaciones'));
app.use('/newcalificaciones', require('./routes/newcalificaciones'));
app.use('/graficas', require('./routes/graficas'));
app.use('/curricular', require('./routes/curricular'));
app.use('/materias', require('./routes/materias'));
app.use('/didactico', require('./routes/didactico'));
app.use('/questions', require('./routes/questions'));
app.use('/notfound', require('./routes/notfound'));
app.use('/condiciones', require('./routes/condiciones'));
app.use('/politicas', require('./routes/politicas'));
app.use('/contacto', require('./routes/contacto'));


//Public
app.use(express.static(path.join(__dirname, 'public')));


//Iniciar el servidor
app.listen(app.get('port'), () => {
  //console.log('Servidor corriendo en el puerto', app.get('port'));
});
