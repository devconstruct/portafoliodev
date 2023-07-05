const express = require('express');
const router = express.Router();
const helpers = require('handlebars-helpers')();
const atob = require('atob'); //"Hello, World!"
const btoa = require('btoa'); //SGVsbG8sIFdvcmxkIQ==

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//Inicio para agregar matriculas
router.get('/add/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  const escuela = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,TO_BASE64(escuela.grado) AS grado FROM escuela WHERE escuela.id_escuela = ?', [encoid_escuela]);
  //console.log(escuela);
  res.render('matricula/add', {escuela: escuela[0]});
});

router.post('/add/:id_escuela/:mapcurricular/:grado', isLoggedIn, async (req,res) => {
  const { id_escuela, mapcurricular, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  const { nombres} = req.body;
  const newMatricula = {
    id_escuela : encoid_escuela,
    mapcurricular,
    nombres
  };
  await db.query('INSERT INTO matricula set ?', [newMatricula]);
  req.flash('success', 'Alumno Agregada a Matricula Correctamente');
  //console.log(newMatricula);
  res.redirect('/matricula/' + req.params.id_escuela + '/' + req.params.grado);
});

router.get('/upstudent/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  const escuela = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,TO_BASE64(escuela.grado) AS grado FROM escuela WHERE escuela.id_escuela = ?', [encoid_escuela]);
  //console.log(escuela);
  res.render('matricula/upstudent', {escuela: escuela[0]});
});

router.get('/:id_escuela/:grado', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  const matricula = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_matricula AS id_matri, matricula.id_escuela, matricula.mapcurricular, matricula.nombres, escuela.id_escuela, escuela.grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 20182019 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC', [encoid_escuela]);
  const agrmatriculas = [1];
  const agmatricula = await db.query('SELECT TO_BASE64(id_escuela) AS id_escuela from escuela where id_escuela = ?', [encoid_escuela]);
  //console.log(matricula[0],agrmatriculas,agmatricula);
  res.render('matricula/list', {matricula,agrmatriculas,agmatricula:agmatricula[0]});
});

router.get('/delete/:id_matri/:id_escuela/:grado', isLoggedIn, async (req, res) => {
  const { id_matri, id_escuela, grado } = req.params;
  var decrypid_escuela = btoa(id_escuela);
  //const { grado } = req.body;
  await db.query('DELETE FROM matricula WHERE id_matricula = ?', [id_matri]);
  req.flash('success', 'Matricula eliminada correctamente');
  res.redirect('/matricula/' + decrypid_escuela + '/' + req.params.grado);
});

router.get('/edit/:id_matricula/:grado', isLoggedIn, async (req, res) => {
  const { id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  const matricula = await db.query('SELECT escuela.grado, matricula.id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.nombres FROM escuela INNER JOIN matricula ON matricula.id_escuela = escuela.id_escuela WHERE matricula.id_matricula = ?', [encoid_matricula]);
  //console.log(matricula[0]);
  res.render('matricula/edit', {matricula:matricula[0]});
});

router.post('/edit/:id_matricula/:grado/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  const { nombres } = req.body;
  let encoid_escuela = atob(id_escuela);
  const newMatricula = {
    id_escuela:encoid_escuela,
    nombres
  };
  //console.log(newMatricula);
  await db.query('UPDATE matricula set ? WHERE id_matricula = ?', [newMatricula, id_matricula]);
  req.flash('success','Matricula editada correctamente');
  res.redirect('/matricula/' + req.params.id_escuela + '/' + req.params.grado);//resvisar ya que no pasa la variable grado

});

router.post('/instudent/:id_escuela/:mapcurricular/:grado', isLoggedIn, async (req,res) => {
  const { id_escuela, mapcurricular, grado} = req.params;
  const { nombres } = req.body;
  let encoid_escuela = atob(id_escuela);
  let encogrado = atob(grado);

  let _nombres = nombres.split(/\r?\n/);
  _nombres.forEach(nombres => {
    db.query('INSERT INTO matricula set ?', {id_escuela:encoid_escuela,mapcurricular,nombres});
  });
res.redirect('/matricula/' + req.params.id_escuela + '/' + req.params.grado);
});


module.exports = router;
