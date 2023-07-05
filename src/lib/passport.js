const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  //console.log(req.body);
  const rows = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) {
    const user = rows[0];
    const validPassword = await helpers.matchPassword(password, user.password);
    if (validPassword) {
      done(null, user, req.flash('success','Bienvenido al sistema' + user.username));
    }else {
      done(null, false, req.flash('message','Contraseña Incorrecta'));
    }
  }else {
    return done(null, false, req.flash('message','Usuario no existe'));
  }


}));

passport.use('local.signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const { nombre, token } = req.body;
  const newUser = {
    username,
    password,
    nombre,
    profileimage : 'profilep.png',
    profileimagesecond : 'profilesecond.png',
    token
  };
  newUser.password = await helpers.encryptPassword(password);
  const result = await db.query('INSERT INTO users SET ?', [newUser]);
  newUser.id = result.insertId;
  return done(null, newUser);
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await db.query('SELECT * FROM users Where id = ?', [id]);
  done(null, rows[0]);
});
