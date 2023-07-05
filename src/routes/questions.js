const express = require('express');
const router = express.Router();
const atob = require('atob');

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/', async (req, res) => {
  const { pagina } = req.params;

  const totalresultado = 10;

  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM questions');

  const question = await db.query('SELECT TO_BASE64(questions.id_pregunta) AS id_pregunta,questions.titulo,questions.descripcion,questions.gusta,questions.disgusta,questions.created_at,users.profileimage,users.nombre,users.apellido,users.token FROM questions INNER JOIN users ON questions.id_usuario = users.id ORDER BY created_at DESC LIMIT ?',[totalresultado]);
  //POR EL MOMENTO NO SIRVE const askquestion = await db.query('SELECT TO_BASE64(questions.id_pregunta) AS id_pregunta,questions.titulo,questions.descripcion,questions.gusta,questions.disgusta,questions.created_at,users.profileimage,users.nombre,users.apellido,users.token FROM questions INNER JOIN users ON questions.id_usuario = users.id ORDER BY created_at DESC LIMIT ?',[totalresultado]);

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM questions');

  res.render('questions/list', {question,totalpag:totalpag[0],questionlast:questionlast[0]});
});

router.get('/:pagina', async (req, res) => {
  const { pagina } = req.params;

  const totalresultado = 10;
  const offset = (req.params.pagina-1) * totalresultado ;


  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM questions');

  const question = await db.query('SELECT TO_BASE64(questions.id_pregunta) AS id_pregunta,questions.titulo,questions.descripcion,questions.gusta,questions.disgusta,questions.created_at,users.profileimage,users.nombre,users.apellido,users.token FROM questions INNER JOIN users ON questions.id_usuario = users.id ORDER BY id_pregunta DESC LIMIT ? offset ?',[totalresultado,offset]);

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM questions');

  res.render('questions/list', {question,totalpag:totalpag[0],questionlast:questionlast[0]});
});

router.get('/question/:id/:token', async (req, res) => {
  res.render('questions/question');
});

router.get('/answer/:id_pregunta/:token', async (req, res) => {
  const { id_pregunta, token } = req.params;
  let encoid_pregunta = atob(id_pregunta);
  const question = await db.query('SELECT TO_BASE64(questions.id_pregunta) AS id_pregunta,questions.id_usuario,questions.titulo,questions.descripcion,questions.gusta,questions.disgusta,questions.created_at,users.profileimage,users.nombre,users.apellido,users.token FROM questions INNER JOIN users ON questions.id_usuario = users.id WHERE id_pregunta = ? AND users.token = ?', [encoid_pregunta,token]);
  const answer = await db.query('SELECT answer.id_respuesta,answer.id_pregunta,answer.respuesta,answer.gusta,answer.disgusta,answer.created_at,users.profileimage,users.nombre,users.apellido,users.token FROM answer INNER JOIN users ON answer.id_usuario = users.id WHERE id_pregunta = ? ORDER BY answer.created_at ASC', [encoid_pregunta]);
  res.render('questions/answer', {answer, question:question[0]});
});

router.get('/busqueda/:searkey', async (req, res) => {
  const { searkey } = req.params;

  const question = await db.query('SELECT TO_BASE64(questions.id_pregunta) AS id_pregunta,questions.titulo,questions.descripcion,questions.gusta,questions.disgusta,questions.created_at,users.profileimage,users.nombre,users.apellido,users.token FROM questions INNER JOIN users ON questions.id_usuario = users.id WHERE titulo LIKE ?', ['%' + searkey + '%']);

  res.render('questions/busqueda', {question});
});

router.post('/busqueda', async (req, res)=> {
  const { searkey } = req.body;

  res.redirect('/questions/busqueda/'+ req.body.searkey);
});

router.post('/savequestion/:id_usuario', isLoggedIn, async (req, res)=> {
  const { id_usuario } = req.params;
  const { titulo, descripcion } = req.body;
  const question = {
    id_usuario,
    titulo,
    descripcion
  };
  await db.query('INSERT INTO questions set ?', [question]);
  req.flash('success', 'Pregunta Publicada Correctamente');
  res.redirect('/questions');
});

router.post('/saveanswer/:id_pregunta/:id_usuario/:token', isLoggedIn, async (req, res)=> {
  const { id_pregunta, id_usuario, token } = req.params;
  const { respuesta } = req.body;
  let encoid_pregunta = atob(id_pregunta);
  const answer = {
    id_pregunta:encoid_pregunta,
    id_usuario,
    respuesta
  };
  await db.query('INSERT INTO answer set ?', [answer]);
  req.flash('success', 'Respuesta Publicada Correctamente');
  res.redirect('/questions/answer/' + req.params.id_pregunta + '/' + req.params.token);
});

module.exports = router;
