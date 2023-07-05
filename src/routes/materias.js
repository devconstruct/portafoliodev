const express = require('express');
const router = express.Router();
const atob = require('atob'); //"Hello, World!"
const btoa = require('btoa'); //SGVsbG8sIFdvcmxkIQ==

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/:id_escuela/:grado', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Select para mostrar el form para insertar materias solo para mostrar el id_escuela y su grado
  const admaterias = await db.query('SELECT TO_BASE64(id_escuela) AS id_escuela,grado from escuela where id_escuela = ? AND grado = ?', [encoid_escuela,grado]);

  //Select para mostrar las materias de esas escuelas
  const listmaterias = await db.query('SELECT * FROM `materias` WHERE id_escuela  = ? AND grado = ?', [encoid_escuela,grado]);

  res.render('materias/list',{admaterias:admaterias[0],listmaterias});
});

router.get('/allmatricula/:id_escuela/:grado', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;

  res.render('/allmatricula/' + req.params.id_escuela + '/' + req.params.grado);
});


router.post('/add/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const {id_escuela,grado} = req.params;
  const {materias} = req.body;
  let encoid_escuela = atob(id_escuela);
  const newMateria = {
    id_escuela:encoid_escuela,
    grado,
    materias
  };
  await db.query('INSERT INTO materias set ?', [newMateria]);
  req.flash('success', 'Las materias han sido agregadas correctamente');
  //res.redirect('/materias/' + req.body.id_escuela + '/' + req.body.grado + '/' + req.body.id_matricula);
  res.redirect('/materias/' + req.params.id_escuela + '/' + req.params.grado + '/');
});


module.exports = router;
