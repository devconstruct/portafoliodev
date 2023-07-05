const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path  = require('path');
const atob = require('atob');

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//Inicio para subir archivos Material Didactico
let storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'src/public/images/profile')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });

//Fin para subir archivos Material Didactico

router.get('/:id/:token', isLoggedIn, async (req, res) => {
  const { id, token } = req.params;
  const profile = await db.query('SELECT * FROM users WHERE id = ? AND token = ?', [id,token]);

  const myquestion = await db.query('SELECT COUNT(*) AS duda FROM questions WHERE id_usuario = ?', [id]);
  const myanswer = await db.query('SELECT COUNT(*) AS educar FROM answer WHERE id_usuario = ?', [id]);
  //console.log(profile);
  res.render('profile/list',{profile,myquestion:myquestion[0],myanswer:myanswer[0]});
});

router.post('/datosgenerales/:id/:token', isLoggedIn, async (req, res)=> {
  const { id, token } = req.params;
  const { nombre, apellido, username, niveleducativo, institucion } = req.body;

  const dates = {
    nombre,
    apellido,
    username,
    niveleducativo,
    institucion
  };
  //console.log(dates);
  await db.query('UPDATE users set ? WHERE id = ?', [dates,id]);
  req.flash('success', 'Material Didactico Publicado Correctamente');
  res.redirect('/profile/' + req.params.id + '/' + req.params.token);
});

router.post('/profileimage/:id/:token', upload.single('profileimage'), isLoggedIn, async (req, res)=> {
  const { id, token } = req.params;
  const { profileimage } = req.body;
  //console.log(`new upload = ${req.file.filename}\n`);
  //  console.log(req.file);
  //  res.json({ msg: 'Upload Works' });
  const profileprincipal = {
    profileimage : req.file.filename
  };
  //console.log(profileprincipal);
  await db.query('UPDATE users set ? WHERE id = ?', [profileprincipal,id]);
  req.flash('success', 'Material Didactico Publicado Correctamente');
  res.redirect('/profile/' + req.params.id + '/' + req.params.token);
});

router.post('/profileimagesecont/:id/:token', upload.single('profileimagesecond'), isLoggedIn, async (req, res)=> {
  const { id } = req.params;
  const { profileimagesecond } = req.body;
  //console.log(`new upload = ${req.file.filename}\n`);
  //  console.log(req.file);
  //  res.json({ msg: 'Upload Works' });
  const profilesecundario = {
    profileimagesecond : req.file.filename
  };
  //console.log(profilesecundario);
  await db.query('UPDATE users set ? WHERE id = ?', [profilesecundario,id]);
  req.flash('success', 'Material Didactico Publicado Correctamente');
  res.redirect('/profile/' + req.params.id + '/' + req.params.token);
});

//Inicio para hacer la paginacion de las preguntas realizadas por el usuario
router.get('/myquestion/:id/:token', isLoggedIn, async (req, res) => {
  const { id, token } = req.params;

  const totalresultado = 10;

  const idtok = await db.query('SELECT id,token FROM users WHERE id = ?', [id]);

  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM questions WHERE id_usuario = ?', [id]);

  const myquestion = await db.query('SELECT TO_BASE64(id_pregunta) AS id_pregunta,id_usuario,titulo,descripcion,gusta,disgusta,created_at FROM questions WHERE id_usuario = ? ORDER BY id_pregunta DESC LIMIT ?', [id,totalresultado]);

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM questions WHERE id_usuario = ?', [id]);

  res.render('profile/myquestion', {myquestion,totalpag:totalpag[0],questionlast:questionlast[0],idtok:idtok[0]});
});

router.get('/myquestion/:id/:pagina/:token', isLoggedIn, async (req, res) => {
  const { id, pagina, token } = req.params;

  const totalresultado = 10;
  const offset = (req.params.pagina-1) * totalresultado ;

  const idtok = await db.query('SELECT id,token FROM users WHERE id = ?', [id]);

  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM questions WHERE id_usuario = ?', [id]);

  const myquestion = await db.query('SELECT TO_BASE64(id_pregunta) AS id_pregunta,id_usuario,titulo,descripcion,gusta,disgusta,created_at FROM questions WHERE id_usuario = ? ORDER BY id_pregunta DESC LIMIT ? offset ?', [id,totalresultado,offset]);

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM questions WHERE id_usuario = ?', [id]);

  res.render('profile/myquestion', {myquestion,totalpag:totalpag[0],questionlast:questionlast[0],idtok:idtok[0]});
});

//Fin para hacer la paginacion de las preguntas realizadas por el usuario

//Inicio para hacer la paginacion de las respuestas realizadas por el usuario
router.get('/myanswer/:id/:token', isLoggedIn, async (req, res) => {
  const { id, token } = req.params;

  const totalresultado = 10;

  const idtok = await db.query('SELECT id,token FROM users WHERE id = ?', [id]);

  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM questions WHERE id_usuario = ?', [id]);

  //const myanswer = await db.query('SELECT answer.id_respuesta,TO_BASE64(answer.id_pregunta) as id_pregunta,answer.id_usuario,answer.created_at,questions.titulo FROM answer INNER JOIN questions ON answer.id_pregunta = questions.id_pregunta WHERE answer.id_usuario = ? ORDER BY id_pregunta DESC LIMIT ?', [id,totalresultado]);
  const myanswer = await db.query('SELECT answer.id_respuesta,TO_BASE64(answer.id_pregunta) AS id_pregunta,answer.id_usuario,answer.created_at,questions.titulo,users.id,users.token FROM answer INNER JOIN questions ON answer.id_pregunta = questions.id_pregunta INNER JOIN users ON questions.id_usuario = users.id WHERE answer.id_usuario = ? ORDER BY created_at DESC LIMIT ?', [id,totalresultado]);

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM questions WHERE id_usuario = ?', [id]);

  res.render('profile/myanswer', {myanswer,totalpag:totalpag[0],questionlast:questionlast[0],idtok:idtok[0]});
});

router.get('/myanswer/:id/:pagina/:token', isLoggedIn, async (req, res) => {
  const { id, pagina } = req.params;

  const totalresultado = 10;
  const offset = (req.params.pagina-1) * totalresultado ;

  const idtok = await db.query('SELECT id,token FROM users WHERE id = ?', [id]);

  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM questions WHERE id_usuario = ?', [id]);

  //const myanswer = await db.query('SELECT answer.id_respuesta,TO_BASE64(answer.id_pregunta) AS id_pregunta,answer.id_usuario,answer.created_at,questions.titulo FROM answer INNER JOIN questions ON answer.id_pregunta = questions.id_pregunta WHERE answer.id_usuario = ? ORDER BY id_pregunta DESC LIMIT ? offset ?', [id,totalresultado,offset]);
  const myanswer = await db.query('SELECT answer.id_respuesta,TO_BASE64(answer.id_pregunta) AS id_pregunta,answer.id_usuario,answer.created_at,questions.titulo,users.id,users.token FROM answer INNER JOIN questions ON answer.id_pregunta = questions.id_pregunta INNER JOIN users ON questions.id_usuario = users.id WHERE answer.id_usuario = ? ORDER BY created_at DESC LIMIT ? offset ?', [id,totalresultado,offset]);

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM questions WHERE id_usuario = ?', [id]);

  res.render('profile/myanswer', {myanswer,totalpag:totalpag[0],questionlast:questionlast[0],idtok:idtok[0]});
});

//Fin para hacer la paginacion de las respuestas realizadas por el usuario

module.exports = router;
