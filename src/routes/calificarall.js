const express = require('express');
const router = express.Router();

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//Get que se usa para mostrar los alumnos que si estan calificados 1ro
router.get('/calificado/:id_matricula/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  //Inicio de Calificaciones de 1ro, Bimestre 1
  const calificarB1 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,primero_tercero.id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 1 AND matricula.id_matricula = ?',[id_matricula]);
  //Fin de Calificaciones de 1ro Bimestre 1

  //Inicio de If
  const calificar_1_3B1 = [1];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[id_matricula]);
  //console.log(calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar);
  res.render('calificaciones/calificado', {calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar:porcalificar[0],calificar_1_3B1,calificar_1_3B2,calificar_1_3B3,calificar_1_3B4,calificar_1_3B5});
});

//-------------------------------------EDICION--------------------------------------------
//Inicio de actualizar calificaciones de 1ro
router.get('/edit/1/:id_primerotercero', isLoggedIn, async (req,res) => {
  const { id_primerotercero, grado } = req.params;
  const edit_calificar_primero_tercero = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,primero_tercero.id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.id_primerotercero = ?',[id_primerotercero]);

  //console.log(edit_calificar_primero_tercero);
  res.render('calificaciones/edit', {edit_calificar_primero_tercero});
});

router.post('/edit/1/:id_primerotercero', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_primerotercero,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  const editCalif1_3 = {
    espanol,
    matematicas,
    cono_medio,
    cien_nat_tec,
    his_pais_conv,
    artes,
    edu_socio,
    edu_fisica,
    ingles
  };
  //console.log(newEscuela);
  await db.query('UPDATE primero_tercero set ? WHERE id_primerotercero = ?', [editCalif1_3, id_primerotercero]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 1ro

//Inicio de actualizar calificaciones de 2do
router.get('/edit/2/:id_primerotercero', isLoggedIn, async (req,res) => {
  const { id_primerotercero, grado } = req.params;
  const edit_calificar_primero_tercero = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,primero_tercero.id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.id_primerotercero = ?',[id_primerotercero]);

  //console.log(edit_calificar_primero_tercero);
  res.render('calificaciones/edit', {edit_calificar_primero_tercero});
});

router.post('/edit/2/:id_primerotercero', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_primerotercero,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  const editCalif1_3 = {
    espanol,
    matematicas,
    cono_medio,
    cien_nat_tec,
    his_pais_conv,
    artes,
    edu_socio,
    edu_fisica,
    ingles
  };
  //console.log(newEscuela);
  await db.query('UPDATE primero_tercero set ? WHERE id_primerotercero = ?', [editCalif1_3, id_primerotercero]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 2do

//Inicio de actualizar calificaciones de 3ro
router.get('/edit/3/:id_primerotercero', isLoggedIn, async (req,res) => {
  const { id_primerotercero, grado } = req.params;
  const edit_calificar_primero_tercero = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,primero_tercero.id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.id_primerotercero = ?',[id_primerotercero]);

  //console.log(edit_calificar_primero_tercero);
  res.render('calificaciones/edit', {edit_calificar_primero_tercero});
});

router.post('/edit/3/:id_primerotercero', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_primerotercero,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  const editCalif1_3 = {
    espanol,
    matematicas,
    cono_medio,
    cien_nat_tec,
    his_pais_conv,
    artes,
    edu_socio,
    edu_fisica,
    ingles
  };
  //console.log(newEscuela);
  await db.query('UPDATE primero_tercero set ? WHERE id_primerotercero = ?', [editCalif1_3, id_primerotercero]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 3ro

//Inicio de actualizar calificaciones de 4to
router.get('/edit/4/:id_cuartosexto', isLoggedIn, async (req,res) => {
  const { id_cuartosexto, grado } = req.params;
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,cuarto_sexto.id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.id_cuartosexto = ?',[id_cuartosexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('calificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/4/:id_cuartosexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_cuartosexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  const editCalif4_6 = {
    espanol,
    matematicas,
    cien_naturales,
    historia,
    geografia,
    form_civ_etica,
    artes,
    edu_fisica,
    ingles
  };
  //console.log(newEscuela);
  await db.query('UPDATE cuarto_sexto set ? WHERE id_cuartosexto = ?', [editCalif4_6, id_cuartosexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 4to

//Inicio de actualizar calificaciones de 5to
router.get('/edit/5/:id_cuartosexto', isLoggedIn, async (req,res) => {
  const { id_cuartosexto, grado } = req.params;
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,cuarto_sexto.id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.id_cuartosexto = ?',[id_cuartosexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('calificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/5/:id_cuartosexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_cuartosexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  const editCalif4_6 = {
    espanol,
    matematicas,
    cien_naturales,
    historia,
    geografia,
    form_civ_etica,
    artes,
    edu_fisica,
    ingles
  };
  //console.log(newEscuela);
  await db.query('UPDATE cuarto_sexto set ? WHERE id_cuartosexto = ?', [editCalif4_6, id_cuartosexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 5to

//Inicio de actualizar calificaciones de 6to
router.get('/edit/6/:id_cuartosexto', isLoggedIn, async (req,res) => {
  const { id_cuartosexto, grado } = req.params;
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,cuarto_sexto.id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.id_cuartosexto = ?',[id_cuartosexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('calificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/6/:id_cuartosexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_cuartosexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  const editCalif4_6 = {
    espanol,
    matematicas,
    cien_naturales,
    historia,
    geografia,
    form_civ_etica,
    artes,
    edu_fisica,
    ingles
  };
  //console.log(newEscuela);
  await db.query('UPDATE cuarto_sexto set ? WHERE id_cuartosexto = ?', [editCalif4_6, id_cuartosexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 6to


module.exports = router;
