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
  //console.log(escuela[0]);
  res.render('allmatricula/add', {escuela: escuela[0]});
});

router.post('/add/:id_escuela/:mapcurricular/:grado', isLoggedIn, async (req,res) => {
  const { id_escuela, mapcurricular, grado} = req.params;
  const { nombres } = req.body;
  let encoid_escuela = atob(id_escuela);
  const newMatricula = {
    id_escuela : encoid_escuela,
    mapcurricular,
    nombres
  };
  await db.query('INSERT INTO matricula set ?', [newMatricula]);
  req.flash('success', 'Alumno Agregada a Matricula Correctamente');
  //console.log(newMatricula);
  res.redirect('/allmatricula/' + req.params.id_escuela + '/' + req.params.grado);
});
//Fin para agregar matriculas

router.get('/allupstudent/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  const escuela = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado AS grado FROM escuela WHERE escuela.id_escuela = ?', [encoid_escuela]);
  //console.log(escuela);
  res.render('allmatricula/allupstudent', {escuela: escuela[0]});
});

//Inico para listar las matriculas

router.get('/:id_escuela/:grado', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  const { id_matricula } = req.body;
  let encoid_escuela = atob(id_escuela);
  const matricula = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_matricula AS id_matri, matricula.id_escuela, matricula.mapcurricular, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.id_escuela AS id_esc, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC', [encoid_escuela]);
  //Inicio de If
  const matriculadd = [1];
  //Fin de If
  const addmatricula = await db.query('SELECT TO_BASE64(id_escuela) AS id_escuela from escuela where id_escuela = ?', [encoid_escuela]);

  //Agregar Materias
  //const addmaterias = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, escuela.id_escuela, escuela.grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND escuela.id_escuela = ?', [id_escuela]);
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,grado from escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias


  const listmaterias = await db.query('SELECT * FROM `materias` WHERE id_escuela = ? AND grado = ?', [encoid_escuela,grado]);


  //console.log(matricula[0],addmatricula,listmaterias[0]);
  res.render('allmatricula/list', {matricula,matriculadd,addmatricula:addmatricula[0],addmaterias:addmaterias[0],listmaterias});
});

//Fin para listar las matriculas

//Inicio para eliminar matriculas
router.get('/delete/:id_matri/:id_esc/:grado', isLoggedIn, async (req, res) => {
  const { id_matri, id_esc, grado } = req.params;
  //const { grado } = req.body;
  var decrypid_escuela = btoa(id_esc);
  await db.query('DELETE FROM matricula WHERE id_matricula = ?', [id_matri]);
  req.flash('success', 'Matricula eliminada correctamente');
  res.redirect('/allmatricula/' + decrypid_escuela + '/' + req.params.grado);
});
//Fin para eliminar matriculas

//Inico para editar la matricula
//Inicio para mostrar los datos del alumno
router.get('/edit/:id_matricula/:grado', isLoggedIn, async (req, res) => {
  const { id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  //const matricula = await db.query('SELECT * FROM matricula WHERE id_matricula = ?', [id_matricula]);
  const matricula = await db.query('SELECT escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.nombres FROM escuela INNER JOIN matricula ON matricula.id_escuela = escuela.id_escuela WHERE matricula.id_matricula = ?', [encoid_matricula]);
  //console.log(matricula[0]);
  res.render('allmatricula/edit', {matricula:matricula[0]});
});
//Fin para mostrar los datos del alumno

router.post('/edit/:id_matricula/:grado/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  const { nombres } = req.body;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const newMatricula = {
    id_escuela:encoid_escuela,
    nombres
  };
  //console.log(newMatricula);
  await db.query('UPDATE matricula set ? WHERE id_matricula = ?', [newMatricula, encoid_matricula]);
  req.flash('success','Matricula editada correctamente');
  res.redirect('/allmatricula/' + req.params.id_escuela + '/' + req.params.grado);

});
//Fin para editar la matricula

router.post('/allinstudent/:id_escuela/:mapcurricular/:grado', isLoggedIn, async (req,res) => {
  const { id_escuela, mapcurricular, grado} = req.params;
  const { nombres } = req.body;
  let encoid_escuela = atob(id_escuela);
  let encogrado = atob(grado);

  let _nombres = nombres.split(/\r?\n/);
  _nombres.forEach(nombres => {
    db.query('INSERT INTO matricula set ?', {id_escuela:encoid_escuela,mapcurricular,nombres});
  });
res.redirect('/allmatricula/' + req.params.id_escuela + '/' + req.params.grado);
});

module.exports = router;
