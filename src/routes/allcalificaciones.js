const express = require('express');
const router = express.Router();
const atob = require('atob');

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//Get que se usa para mostrar los alumnos que si estan calificados 1ro
router.get('/calificado/:id_matricula/:grado/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela, materias } = req.params;
  let encoid_matricula = atob(id_matricula);

  //Select para mostrar los alumnos
  /* const allumnos = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(materias.id_materias) AS id_materias,materias.id_matricula,TO_BASE64(materias.id_escuela) AS id_escuela,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,calificaciones.periodo,calificaciones.calificaciones FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN materias ON materias.id_matricula = TO_BASE64(matricula.id_matricula) AS id_matricula INNER JOIN calificaciones ON TO_BASE64(calificaciones.id_materias) AS id_materias = TO_BASE64(materias.id_materias) AS id_materias WHERE calificaciones.periodo = 1 AND matricula.id_matricula = ?',[id_matricula]);*/
  const allumnos = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE matricula.mapcurricular = 411 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de select para mostrar los alumnos

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 1
  const allTodoP1 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 1

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 2
  const allTodoP2 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 2

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 3
  const allTodoP3 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 3

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 4
  const allTodoP4 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 4 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 4

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 5
  const allTodoP5 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 5 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 5

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 6
  const allTodoP6 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 6 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 6

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 7
  const allTodoP7 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 7 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 7

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 8
  const allTodoP8 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 8 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 8

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 9
  const allTodoP9 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 9 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 9

  //Inicio de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 10
  const allTodoP10 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela INNER JOIN calificaciones ON materias.id_materias = calificaciones.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.mapcurricular = 411 AND calificaciones.periodo = 10 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Select para mostrar el periodo segun a materia y alumnos(matrcula) PERIODO 10


  //Inicio de If
  const calificar_all_1 = [1];
  const calificar_all_2 = [2];
  const calificar_all_3 = [3];
  const calificar_all_4 = [4];
  const calificar_all_5 = [5];
  const calificar_all_6 = [6];
  const calificar_all_7 = [7];
  const calificar_all_8 = [8];
  const calificar_all_9 = [9];
  const calificar_all_10 = [10];
  const materiasAll = [11];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  //console.log(allumnos,porcalificar,allTodoP1,allTodoP2,allTodoP3,allTodoP4,allTodoP5,allTodoP6,allTodoP7,allTodoP8,allTodoP9,allTodoP10,materiasAll);

  res.render('allcalificaciones/calificado', {allumnos,allTodoP1,allTodoP2,allTodoP3,allTodoP4,allTodoP5,allTodoP6,allTodoP7,allTodoP8,allTodoP9,allTodoP10,materiasAll,porcalificar:porcalificar[0],calificar_all_1,calificar_all_2,calificar_all_3,calificar_all_4,calificar_all_5,calificar_all_6,calificar_all_7,calificar_all_8,calificar_all_9,calificar_all_10});
});


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/1/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP1 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //const listmaterias = await db.query('SELECT * FROM `materias` WHERE id_escuela  = ? AND grado = ?', [id_escuela,grado]);
  const listmaterias = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 1 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]); // ****************************************************************************************************************************************************************************************************************************************************************************************************************

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]); //CORRECTO

  const listcalificacion = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,grado from escuela where id_escuela = ?', [encoid_escuela]);

  //console.log(no_calificadoP1);
  res.render('allcalificaciones/calificar', {no_calificadoP1,listmateriascalificar,listmaterias,listcalificacion,promedio:promedio[0],materiasurl:materiasurl[0],addmaterias:addmaterias[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 1 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/2/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP2 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias2 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 2 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl2 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio2 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP2);
  res.render('allcalificaciones/calificar', {no_calificadoP2,listmateriascalificar2,listmaterias2,listcalificacion2,promedio2:promedio2[0],materiasurl2:materiasurl2[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 2 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/3/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP3 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias3 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 3 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl3 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio3 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP3);
  res.render('allcalificaciones/calificar', {no_calificadoP3,listmateriascalificar3,listmaterias3,listcalificacion3,promedio3:promedio3[0],materiasurl3:materiasurl3[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 3 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 4 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/4/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP4 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias4 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 4 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl4 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio4 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP4);
  res.render('allcalificaciones/calificar', {no_calificadoP4,listmateriascalificar4,listmaterias4,listcalificacion4,promedio4:promedio4[0],materiasurl4:materiasurl4[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 4 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 5 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/5/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP5 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias5 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 5 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl5 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio5 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP5);
  res.render('allcalificaciones/calificar', {no_calificadoP5,listmateriascalificar5,listmaterias5,listcalificacion5,promedio5:promedio5[0],materiasurl5:materiasurl5[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 5 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 6 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/6/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP6 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias6 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 6 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl6 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio6 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP6);
  res.render('allcalificaciones/calificar', {no_calificadoP6,listmateriascalificar6,listmaterias6,listcalificacion6,promedio6:promedio6[0],materiasurl6:materiasurl6[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 6 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 7 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/7/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP7 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias7 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 7 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl7 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio7 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP7);
  res.render('allcalificaciones/calificar', {no_calificadoP7,listmateriascalificar7,listmaterias7,listcalificacion7,promedio7:promedio7[0],materiasurl7:materiasurl7[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 7 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 8 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/8/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP8 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias8 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 8 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl8 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio8 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP8);
  res.render('allcalificaciones/calificar', {no_calificadoP8,listmateriascalificar8,listmaterias8,listcalificacion8,promedio8:promedio8[0],materiasurl8:materiasurl8[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 8 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 9 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/9/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP9 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias9 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 9 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl9 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio9 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP9);
  res.render('allcalificaciones/calificar', {no_calificadoP9,listmateriascalificar9,listmaterias9,listcalificacion9,promedio9:promedio9[0],materiasurl9:materiasurl9[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 9 y calificar sus materias


//Inicio de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 10 y calificar sus materias
router.get('/calificar/:id_matricula/:grado/10/:id_escuela', isLoggedIn, async (req, res) => {
  const { id_matricula, grado, id_escuela } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const no_calificadoP10 = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);

  const listmaterias10 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.grado,escuela.grupo,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela INNER JOIN materias ON escuela.id_escuela= materias.id_escuela WHERE escuela.id_escuela = ? AND escuela.grado = ? AND matricula.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  const listmateriascalificar10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 10 AND materias.id_escuela = ? AND materias.grado = ? AND calificaciones.id_matricula = ?', [encoid_escuela,grado,encoid_matricula]);

  //Select que funciona para url y regresar para mostrar materias y calificaciones
  const materiasurl10 = await db.query('SELECT TO_BASE64(matricula.id_matricula) AS id_matricula, TO_BASE64(matricula.id_escuela) AS id_escuela, matricula.mapcurricular, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(escuela.id_escuela) AS id_escuela, escuela.grado AS grado FROM matricula INNER JOIN escuela ON matricula.id_escuela = escuela.id_escuela Where matricula.mapcurricular = 411 AND matricula.id_matricula = ?', [encoid_matricula]);

  const listcalificacion10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular  FROM calificaciones  INNER JOIN materias ON calificaciones.id_materias = materias.id_materias INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE matricula.id_matricula = ? AND matricula.id_escuela = ? AND materias.grado = ?', [encoid_matricula,encoid_escuela,grado]);

  const promedio10 = await db.query('SELECT AVG(calificaciones) AS P FROM calificaciones WHERE id_matricula = ? AND id_escuela = ?', [encoid_matricula,encoid_escuela,grado]);

  //console.log(no_calificadoP10);
  res.render('allcalificaciones/calificar', {no_calificadoP10,listmateriascalificar10,listmaterias10,listcalificacion10,promedio10:promedio10[0],materiasurl10:materiasurl10[0]});
});
//Fin de Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados Bimestre 10 y calificar sus materias

//---------------------------------------------------------------------------------------------------
// ************************** MOSTRAR TABLA DE CALIFICACIONES *****************************************************

//Inicio de Post que se usa para calificar un nuevo alumno 1 año
router.get('/listcalificaciones/:id_escuela/1/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 1 año

//Inicio de Post que se usa para calificar un nuevo alumno 2 año
router.get('/listcalificaciones/:id_escuela/2/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 2 año

//Inicio de Post que se usa para calificar un nuevo alumno 3 año
router.get('/listcalificaciones/:id_escuela/3/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [id_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 3 año

//Inicio de Post que se usa para calificar un nuevo alumno 4 año
router.get('/listcalificaciones/:id_escuela/4/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 4 año

//Inicio de Post que se usa para calificar un nuevo alumno 5 año
router.get('/listcalificaciones/:id_escuela/5/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 5 año

//Inicio de Post que se usa para calificar un nuevo alumno 6 año
router.get('/listcalificaciones/:id_escuela/6/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 6 año

//Inicio de Post que se usa para calificar un nuevo alumno 7 año
router.get('/listcalificaciones/:id_escuela/7/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 7 año

//Inicio de Post que se usa para calificar un nuevo alumno 8 año
router.get('/listcalificaciones/:id_escuela/8/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 8 año

//Inicio de Post que se usa para calificar un nuevo alumno 9 año
router.get('/listcalificaciones/:id_escuela/9/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 9 año

//Inicio de Post que se usa para calificar un nuevo alumno 10 año
router.get('/listcalificaciones/:id_escuela/10/:id_materias', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  const { id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Agregar Materias
  const addmaterias = await db.query('SELECT TO_BASE64(escuela.id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela where id_escuela = ?', [encoid_escuela]);
  //Fin de agregar materias

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1
  const listmateriasP1 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1

  //Inicio para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera
  const listmateriasP2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ?', [encoid_escuela]);
  //Fin para Mostrar las materias y verificar si hay alguna calificacion que mostrar de Periodo 1 en la parte de afuera

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmateriasP3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar el link de la grafica
  const listmateriasG = await db.query('SELECT TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,grado,materias FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar el link de la grafica

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  res.render('allcalificaciones/listcalificaciones', {addmaterias:addmaterias[0],listmateriasP1,listmateriasP2:listmateriasP2[0],listmateriasP3,matcal1,matcal2,matcal3,matcal4,matcal5,matcal6,matcal7,matcal8,matcal9,matcal10,listmateriasG:listmateriasG[0]});
});
//Fin de Post que se usa para calificar un nuevo alumno 10 año

//Inicio Buscar alumno
router.post('/listcalificaciones', isLoggedIn, async (req,res) => {
  //Recuperas las variables id_escuela y id_materias
  const { id_escuela, id_materias, grado } = req.body;
  //Y las envias al get de arriba para ser consultadas por la abase de datos
  res.redirect('/allcalificaciones/listcalificaciones/' + req.body.id_escuela + '/' + req.body.grado + '/' + req.body.id_materias);
});
//Fin de buscar alumno

//---------------------------------------------------------------------------------------------------
// ************************** CALIFICAR ALUMNOS *****************************************************

//Inicio de Post que se usa para calificar un nuevo alumno 1 periodo
router.get('/calif/:id_materias/:id_matricula/1', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  //const nocalificadas = await db.query('SELECT * FROM `materias` WHERE id_materias = ?', [id_materias]);
  const nocalificadas = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 1 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados = [1];

  //console.log(nocalificadas);
  res.render('allcalificaciones/calif', {nocalificadas,calificados,sicalificadas,calificacionesurl:calificacionesurl[0]});
});

//Post que se usa para calificar un nuevo alumno 1 periodo
router.post('/add/:id_materias/1', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones1 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones1]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log('EL id_escuela ES *************************',id_escuela);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 1 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 1 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 2 periodo
router.get('/calif/:id_materias/:id_matricula/2', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas2 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas2 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 2 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl2 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados2 = [1];

  //console.log(nocalificadas2);
  res.render('allcalificaciones/calif', {nocalificadas2,calificados2,sicalificadas2,calificacionesurl2:calificacionesurl2[0]});
});

//Post que se usa para calificar un nuevo alumno 2 periodo
router.post('/add/:id_materias/2', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones2 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones2]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones2);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 2 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 2 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 3 periodo
router.get('/calif/:id_materias/:id_matricula/3', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas3 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas3 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 3 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl3 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados3 = [1];

  //console.log(nocalificadas3);
  res.render('allcalificaciones/calif', {nocalificadas3,calificados3,sicalificadas3,calificacionesurl3:calificacionesurl3[0]});
});

//Post que se usa para calificar un nuevo alumno 3 periodo
router.post('/add/:id_materias/3', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones3 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones3]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones3);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 3 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 3 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 4 periodo
router.get('/calif/:id_materias/:id_matricula/4', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas4 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas4 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 4 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl4 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados4 = [1];

  //console.log(nocalificadas4);
  res.render('allcalificaciones/calif', {nocalificadas4,calificados4,sicalificadas4,calificacionesurl4:calificacionesurl4[0]});
});

//Post que se usa para calificar un nuevo alumno 4 periodo
router.post('/add/:id_materias/4', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones4 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones4]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones4);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 4 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 4 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 5 periodo
router.get('/calif/:id_materias/:id_matricula/5', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas5 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias,encoid_matricula]);
  const sicalificadas5 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 5 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl5 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados5 = [1];

  //console.log(nocalificadas5);
  res.render('allcalificaciones/calif', {nocalificadas5,calificados5,sicalificadas5,calificacionesurl5:calificacionesurl5[0]});
});

//Post que se usa para calificar un nuevo alumno 5 periodo
router.post('/add/:id_materias/5', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones5 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones5]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones5);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 5 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 5 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 6 periodo
router.get('/calif/:id_materias/:id_matricula/6', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas6 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas6 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 6 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl6 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados6 = [1];

  //console.log(nocalificadas6);
  res.render('allcalificaciones/calif', {nocalificadas6,calificados6,sicalificadas6,calificacionesurl6:calificacionesurl6[0]});
});

//Post que se usa para calificar un nuevo alumno 6 periodo
router.post('/add/:id_materias/6', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones6 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones6]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones6);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 6 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 6 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 7 periodo
router.get('/calif/:id_materias/:id_matricula/7', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas7 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas7 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 7 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl7 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados7 = [1];

  //console.log(nocalificadas7);
  res.render('allcalificaciones/calif', {nocalificadas7,calificados7,sicalificadas7,calificacionesurl7:calificacionesurl7[0]});
});

//Post que se usa para calificar un nuevo alumno 7 periodo
router.post('/add/:id_materias/7', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones7 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones7]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones7);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 7 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 7 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 8 periodo
router.get('/calif/:id_materias/:id_matricula/8', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas8 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas8 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 8 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl8 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados8 = [1];

  //console.log(nocalificadas8);
  res.render('allcalificaciones/calif', {nocalificadas8,calificados8,sicalificadas8,calificacionesurl8:calificacionesurl8[0]});
});

//Post que se usa para calificar un nuevo alumno 8 periodo
router.post('/add/:id_materias/8', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones8 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones8]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones8);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 8 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 8 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 9 periodo
router.get('/calif/:id_materias/:id_matricula/9', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas9 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas9 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 9 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl9 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados9 = [1];

  //console.log(nocalificadas9);
  res.render('allcalificaciones/calif', {nocalificadas9,calificados9,sicalificadas9,calificacionesurl9:calificacionesurl9[0]});
});

//Post que se usa para calificar un nuevo alumno 9 periodo
router.post('/add/:id_materias/9', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones9 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones9]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones9);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 9 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 9 periodo


//Inicio de Post que se usa para calificar un nuevo alumno 10 periodo
router.get('/calif/:id_materias/:id_matricula/10', isLoggedIn, async (req,res) => {
  const { id_materias,id_matricula } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_materias = atob(id_materias);
  //Mostrar las materias y sus caracteristicas
  const nocalificadas10 = await db.query('SELECT TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias,TO_BASE64(escuela.id_escuela) AS id_escuela,escuela.nom_escuela,escuela.grado,escuela.grupo,TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM materias INNER JOIN escuela ON materias.id_escuela = escuela.id_escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela WHERE materias.id_materias = ? AND matricula.id_matricula = ?', [encoid_materias, encoid_matricula]);
  const sicalificadas10 = await db.query('SELECT TO_BASE64(calificaciones.id_calificaciones) AS id_calificaciones,TO_BASE64(calificaciones.id_materias) AS id_materias,TO_BASE64(calificaciones.id_escuela) AS id_escuela,TO_BASE64(calificaciones.id_matricula) AS id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,TO_BASE64(materias.id_materias) AS id_materias,TO_BASE64(materias.id_escuela) AS id_escuela,materias.grado,materias.materias FROM calificaciones INNER JOIN materias ON calificaciones.id_materias = materias.id_materias WHERE calificaciones.periodo = 10 AND materias.id_materias = ? AND calificaciones.id_matricula = ?', [encoid_materias,encoid_matricula]);

  const calificacionesurl10 = await db.query('SELECT TO_BASE64(id_materias) AS id_materias, TO_BASE64(id_escuela) AS id_escuela, grado, materias FROM `materias` WHERE id_materias = ?', [encoid_materias]);

  const calificados10 = [1];

  //console.log(nocalificadas10);
  res.render('allcalificaciones/calif', {nocalificadas10,calificados10,sicalificadas10,calificacionesurl10:calificacionesurl10[0]});
});

//Post que se usa para calificar un nuevo alumno 10 periodo
router.post('/add/:id_materias/10', isLoggedIn, async (req,res) => {
  const { id_escuela, id_matricula, periodo, grado, calificaciones } = req.body;
  const { id_materias } = req.params;
  let encoid_materias = atob(id_materias);
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const allCalificaciones10 = {
    id_materias:encoid_materias,
    id_escuela:encoid_escuela,
    id_matricula:encoid_matricula,
    periodo,
    grado,
    calificaciones
  };
  await db.query('INSERT INTO calificaciones set ?', [allCalificaciones10]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(allCalificaciones10);
  res.redirect('/allcalificaciones/calificar/' + req.body.id_matricula + '/' + req.body.grado + '/' + 10 + '/' + req.body.id_escuela);
});
//Fin de Post que se usa para calificar un nuevo alumno 9 periodo


//-------------------------------------EDICION--------------------------------------------
//Inicio de actualizar calificaciones de 1ro
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1
  const allTodoP1 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[encoid_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1

  //console.log(allTodoP1);
  res.render('allcalificaciones/edit', {allTodoP1});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_1 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_1,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 1ro

//Inicio de actualizar calificaciones de 2do
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1
  const allTodoP2 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1

  console.log(allTodoP2);
  res.render('allcalificaciones/edit', {allTodoP2});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_2 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_2,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 2do


//Inicio de actualizar calificaciones de 3do
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1
  const allTodoP3 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1

  console.log(allTodoP3);
  res.render('allcalificaciones/edit', {allTodoP3});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_3 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_3,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 3do


//Inicio de actualizar calificaciones de 4to
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1
  const allTodoP4 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 1

  console.log(allTodoP4);
  res.render('allcalificaciones/edit', {allTodoP4});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_4 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_4,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 4to


//Inicio de actualizar calificaciones de 5to
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 5
  const allTodoP5 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 5

  console.log(allTodoP5);
  res.render('allcalificaciones/edit', {allTodoP5});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_5 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_5,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 5to


//Inicio de actualizar calificaciones de 6to
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 6
  const allTodoP6 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 6

  console.log(allTodoP6);
  res.render('allcalificaciones/edit', {allTodoP6});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_6 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_6,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 6to


//Inicio de actualizar calificaciones de 7mo
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 7
  const allTodoP7 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 7

  console.log(allTodoP7);
  res.render('allcalificaciones/edit', {allTodoP7});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_7 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_7,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 7mo


//Inicio de actualizar calificaciones de 8vo
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 8
  const allTodoP8 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 8

  console.log(allTodoP8);
  res.render('allcalificaciones/edit', {allTodoP8});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_8 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_8,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 8vo


//Inicio de actualizar calificaciones de 9no
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 9
  const allTodoP9 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 9

  console.log(allTodoP9);
  res.render('allcalificaciones/edit', {allTodoP9});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_9 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_9,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 9no


//Inicio de actualizar calificaciones de 10mo
router.get('/edit/:id_calificaciones', isLoggedIn, async (req,res) => {
  const { id_calificaciones } = req.params;
  let encoid_calificaciones = atob(id_calificaciones);
  //Inicio de Select para mostrar las generales de las calificaciones y poder editar PERIODO 10
  const allTodoP10 = await db.query('SELECT TO_BASE64(id_calificaciones) AS id_calificaciones,TO_BASE64(id_materias) AS id_materias,TO_BASE64(id_escuela) AS id_escuela,TO_BASE64(id_matricula) AS id_matricula,periodo,grado,calificaciones FROM calificaciones WHERE id_calificaciones = ?',[id_calificaciones]);
  //Fin de Select para mostrar las generales de las calificaciones y poder editar PERIODO 10

  console.log(allTodoP10);
  res.render('allcalificaciones/edit', {allTodoP10});
});

router.post('/edit/:id_calificaciones/:id_matricula/:grado/:id_escuela/:id_materias', isLoggedIn, async (req,res) => {
  const { id_calificaciones, id_matricula, grado, id_escuela, id_materias } = req.params;
  const { calificaciones } = req.body;
  let encoid_calificaciones = atob(id_calificaciones);
  const editCalif1_10 = {
    calificaciones
  };
  //console.log(newEscuela);
  await db.query('UPDATE calificaciones set ? WHERE id_calificaciones = ?', [editCalif1_9,encoid_calificaciones]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/allcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado + '/' + req.params.id_escuela);
});
//Fin de actualizar calificaciones de 10mo
module.exports = router;
