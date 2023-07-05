const express = require('express');
const router = express.Router();
const atob = require('atob');

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//INICIO DE MAPA CURRICULAR 2018-2019

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 1
router.get('/:id_escuela/1/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 1 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 2
router.get('/:id_escuela/1/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionesprimero_terceroB2 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 2 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  const calificacionesB2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  //console.log(listcalificacionesprimero_terceroB2);
  res.render('graficas/list', {listcalificacionesprimero_terceroB2,calificacionesB2});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 3
router.get('/:id_escuela/1/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionesprimero_terceroB3 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 3 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  const calificacionesB3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  //console.log(listcalificacionesprimero_terceroB3,calificacionesB3);
  res.render('graficas/list', {listcalificacionesprimero_terceroB3,calificacionesB3});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 4
router.get('/:id_escuela/1/4', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  const listcalificacionesprimero_terceroB4 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 4 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 4
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  const calificacionesB4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  //console.log(listcalificacionesprimero_terceroB4);
  res.render('graficas/list', {listcalificacionesprimero_terceroB4,calificacionesB4});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 4

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 5
router.get('/:id_escuela/1/5', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  const listcalificacionesprimero_terceroB5 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 5 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 5
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  const calificacionesB5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  //console.log(listcalificacionesprimero_terceroB5,calificacionesB5);
  res.render('graficas/list', {listcalificacionesprimero_terceroB5,calificacionesB5});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Bimestre 5

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 1
router.get('/:id_escuela/2/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 1 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 2
router.get('/:id_escuela/2/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 2 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 3
router.get('/:id_escuela/2/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 3 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 3
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 4
router.get('/:id_escuela/2/4', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 4 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 3
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 4

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 5
router.get('/:id_escuela/2/5', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 5 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 3
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 5

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 1
router.get('/:id_escuela/3/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 1 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 2
router.get('/:id_escuela/3/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 2 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 2
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 3
router.get('/:id_escuela/3/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 3
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 3 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 3
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 4
router.get('/:id_escuela/3/4', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 4 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 4
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 4

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 5
router.get('/:id_escuela/3/5', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(cien_nat_tec) AS sumcien_nat_tec,AVG(his_pais_conv) AS sumhis_pais_conv,AVG(artes) AS sumartes,AVG(edu_socio) AS sumedu_socio,AVG(edu_fisica) AS sumedu_fisica,AVG(ingles) AS sumingles FROM primero_tercero WHERE bimestre = 5 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 5
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  const calificacionesB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, primero_tercero.id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  //console.log(listcalificacionesprimero_terceroB1,calificacionesB1);
  res.render('graficas/list', {listcalificacionesprimero_terceroB1,calificacionesB1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 5

//Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 1
router.get('/:id_escuela/4/1', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionescuarto_sextoB1 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 1 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  const calificaciones46B1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  //console.log(listcalificacionescuarto_sextoB1,calificaciones46B1);
  res.render('graficas/list', {listcalificacionescuarto_sextoB1,calificaciones46B1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Bimestre 1
//Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 2
router.get('/:id_escuela/4/2', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionescuarto_sextoB2 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 2 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  const calificaciones46B2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  //console.log(listcalificacionescuarto_sextoB2,calificaciones46B2);
  res.render('graficas/list', {listcalificacionescuarto_sextoB2,calificaciones46B2});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Bimestre 2
//Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 3
router.get('/:id_escuela/4/3', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 3
  const listcalificacionescuarto_sextoB3 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 3 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 3
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  const calificaciones46B3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  //console.log(listcalificacionescuarto_sextoB3,calificaciones46B3);
  res.render('graficas/list', {listcalificacionescuarto_sextoB3,calificaciones46B3});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Bimestre 3
//Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 4
router.get('/:id_escuela/4/4', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  const listcalificacionescuarto_sextoB4 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 4 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  const calificaciones46B4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  //console.log(listcalificacionescuarto_sextoB4,calificaciones46B4);
  res.render('graficas/list', {listcalificacionescuarto_sextoB4,calificaciones46B4});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Bimestre 4
//Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 5
router.get('/:id_escuela/4/5', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  const listcalificacionescuarto_sextoB5 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 5 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  const calificaciones46B5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  //console.log(listcalificacionescuarto_sextoB5,calificaciones46B5);
  res.render('graficas/list', {listcalificacionescuarto_sextoB5,calificaciones46B5});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Bimestre 5

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 1
router.get('/:id_escuela/5/1', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionescuarto_sextoB1 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 1 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  const calificaciones46B1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  //console.log(listcalificacionescuarto_sextoB1,calificaciones46B1);
  res.render('graficas/list', {listcalificacionescuarto_sextoB1,calificaciones46B1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Bimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 2
router.get('/:id_escuela/5/2', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionescuarto_sextoB2 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 2 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  const calificaciones46B2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  //console.log(listcalificacionescuarto_sextoB2,calificaciones46B2);
  res.render('graficas/list', {listcalificacionescuarto_sextoB2,calificaciones46B2});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Bimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 3
router.get('/:id_escuela/5/3', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 3
  const listcalificacionescuarto_sextoB3 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 3 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 3
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  const calificaciones46B3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  //console.log(listcalificacionescuarto_sextoB3,calificaciones46B3);
  res.render('graficas/list', {listcalificacionescuarto_sextoB3,calificaciones46B3});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Bimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 4
router.get('/:id_escuela/5/4', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  const listcalificacionescuarto_sextoB4 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 4 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  const calificaciones46B4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  //console.log(listcalificacionescuarto_sextoB4,calificaciones46B4);
  res.render('graficas/list', {listcalificacionescuarto_sextoB4,calificaciones46B4});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Bimestre 4

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 5
router.get('/:id_escuela/5/5', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  const listcalificacionescuarto_sextoB5 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 5 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  const calificaciones46B5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  //console.log(listcalificacionescuarto_sextoB5,calificaciones46B5);
  res.render('graficas/list', {listcalificacionescuarto_sextoB5,calificaciones46B5});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Bimestre 5

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 1
router.get('/:id_escuela/6/1', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionescuarto_sextoB1 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 1 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  const calificaciones46B1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1
  //console.log(listcalificacionescuarto_sextoB1,calificaciones46B1);
  res.render('graficas/list', {listcalificacionescuarto_sextoB1,calificaciones46B1});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Bimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 2
router.get('/:id_escuela/6/2', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  const listcalificacionescuarto_sextoB2 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 2 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 2
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  const calificaciones46B2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 2
  //console.log(listcalificacionescuarto_sextoB2,calificaciones46B2);
  res.render('graficas/list', {listcalificacionescuarto_sextoB2,calificaciones46B2});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Bimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 3
router.get('/:id_escuela/6/3', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 3
  const listcalificacionescuarto_sextoB3 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 3 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 3
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  const calificaciones46B3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 3
  //console.log(listcalificacionescuarto_sextoB3,calificaciones46B3);
  res.render('graficas/list', {listcalificacionescuarto_sextoB3,calificaciones46B3});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Bimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 4
router.get('/:id_escuela/6/4', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  const listcalificacionescuarto_sextoB4 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 4 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 4
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  const calificaciones46B4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 4
  //console.log(listcalificacionescuarto_sextoB4,calificaciones46B4);
  res.render('graficas/list', {listcalificacionescuarto_sextoB4,calificaciones46B4});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Bimestre 4

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 5
router.get('/:id_escuela/6/5', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  const listcalificacionescuarto_sextoB5 = await db.query('SELECT AVG(espanol) AS promespanol,AVG(matematicas) AS promtematicas,AVG(cien_naturales) AS promcien_nat,AVG(historia) AS promhist,AVG(geografia) AS promgeo,AVG(form_civ_etica) AS promfoce,AVG(artes) AS promartes,AVG(edu_fisica) AS promedu_fisica,AVG(ingles) AS promingles FROM cuarto_sexto WHERE bimestre = 5 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 5
  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  const calificaciones46B5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 5
  //console.log(listcalificacionescuarto_sextoB5,calificaciones46B5);
  res.render('graficas/list', {listcalificacionescuarto_sextoB5,calificaciones46B5});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Bimestre 5

// *******************************************************************************************************
//INICIO DE MAPA CURRICULAR A MEDIADOS DE 2019

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Trimestre 1
router.get('/2019/:id_escuela/1/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Bimestre 1
  const listcalificacionesprimero_segundo2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newprimero_segundo WHERE trimestre = 1 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Bimestre 1

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Bimestre 1 Año a mediados 2019
  const calificaciones2019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Bimestre 1 Año a mediados 2019

  //console.log(listcalificacionesprimero_segundo2019);
  res.render('graficas/2019', {listcalificacionesprimero_segundo2019,calificaciones2019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Trimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Trimestre 2
router.get('/2019/:id_escuela/1/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 2
  const listcalificacionesprimero_segundo2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newprimero_segundo WHERE trimestre = 2 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 2

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 1 a mediados 2019
  const calificaciones2019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 1 a mediados 2019

  //console.log(listcalificacionesprimero_segundo2019);
  res.render('graficas/2019', {listcalificacionesprimero_segundo2019,calificaciones2019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Trimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro Trimestre 3
router.get('/2019/:id_escuela/1/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 3
  const listcalificacionesprimero_segundo2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newprimero_segundo WHERE trimestre = 3 AND grado = 1 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 3

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 1 a mediados 2019
  const calificaciones2019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 1 a mediados 2019

  //console.log(listcalificacionesprimero_segundo2019);
  res.render('graficas/2019', {listcalificacionesprimero_segundo2019,calificaciones2019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro Trimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Trimestre 1
router.get('/2019/:id_escuela/2/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 1
  const listcalificacionesprimero_segundo2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newprimero_segundo WHERE trimestre = 1 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 1

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 2 a mediados 2019
  const calificaciones2019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 2 a mediados 2019

  //console.log(listcalificacionesprimero_segundo2019);
  res.render('graficas/2019', {listcalificacionesprimero_segundo2019,calificaciones2019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Trimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Trimestre 2
router.get('/2019/:id_escuela/2/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 2
  const listcalificacionesprimero_segundo2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newprimero_segundo WHERE trimestre = 2 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 2

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 2 a mediados 2019
  const calificaciones2019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 2 a mediados 2019

  //console.log(listcalificacionesprimero_segundo2019);
  res.render('graficas/2019', {listcalificacionesprimero_segundo2019,calificaciones2019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Trimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 2do Trimestre 3
router.get('/2019/:id_escuela/2/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 3
  const listcalificacionesprimero_segundo2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cono_medio) AS sumcono_medio,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newprimero_segundo WHERE trimestre = 3 AND grado = 2 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 3

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 2 a mediados 2019
  const calificaciones2019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 2 a mediados 2019

  //console.log(listcalificacionesprimero_segundo2019);
  res.render('graficas/2019', {listcalificacionesprimero_segundo2019,calificaciones2019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 2do Trimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Trimestre 1
router.get('/2019/:id_escuela/3/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 1
  const listcalificacionestercero2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(enti_vivo) AS sumenti_vivo,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newtercero WHERE trimestre = 1 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 1

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 3 a mediados 2019
  const calificacionesT32019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newtercero.idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional,newtercero.edu_fisica,(newtercero.espanol+ newtercero.matematicas+newtercero.cien_naturales+newtercero.enti_vivo+newtercero.form_civ_etica+newtercero.artes+newtercero.edu_socioemocional+newtercero.edu_fisica)/8 AS P FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 3 a mediados 2019

  //console.log(listcalificacionestercero2019);
  res.render('graficas/2019', {listcalificacionestercero2019,calificacionesT32019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Trimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Trimestre 2
router.get('/2019/:id_escuela/3/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 2
  const listcalificacionestercero2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(enti_vivo) AS sumenti_vivo,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newtercero WHERE trimestre = 2 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 2

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 3 a mediados 2019
  const calificacionesT32019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newtercero.idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional,newtercero.edu_fisica,(newtercero.espanol+ newtercero.matematicas+newtercero.cien_naturales+newtercero.enti_vivo+newtercero.form_civ_etica+newtercero.artes+newtercero.edu_socioemocional+newtercero.edu_fisica)/8 AS P FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 3 a mediados 2019

  //console.log(listcalificacionestercero2019);
  res.render('graficas/2019', {listcalificacionestercero2019,calificacionesT32019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Trimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 3ro Trimestre 3
router.get('/2019/:id_escuela/3/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 3
  const listcalificacionestercero2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(enti_vivo) AS sumenti_vivo,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newtercero WHERE trimestre = 3 AND grado = 3 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 3

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 3 a mediados 2019
  const calificacionesT32019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newtercero.idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional,newtercero.edu_fisica,(newtercero.espanol+ newtercero.matematicas+newtercero.cien_naturales+newtercero.enti_vivo+newtercero.form_civ_etica+newtercero.artes+newtercero.edu_socioemocional+newtercero.edu_fisica)/8 AS P FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 3 a mediados 2019

  //console.log(listcalificacionestercero2019);
  res.render('graficas/2019', {listcalificacionestercero2019,calificacionesT32019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 3ro Trimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 4to Trimestre 1
router.get('/2019/:id_escuela/4/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 1
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 1 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 1

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 4 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 4 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Trimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 4to Trimestre 2
router.get('/2019/:id_escuela/4/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 2
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 2 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 2

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 4 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 4 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Trimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 4to Trimestre 3
router.get('/2019/:id_escuela/4/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 3
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 3 AND grado = 4 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 3

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 4 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 4 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 4to Trimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Trimestre 1
router.get('/2019/:id_escuela/5/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 1
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 1 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 1

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 5 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 5 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Trimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Trimestre 2
router.get('/2019/:id_escuela/5/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 1
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 2 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 1

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 5 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 1 Año 5 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Trimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 5to Trimestre 3
router.get('/2019/:id_escuela/5/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 3
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 3 AND grado = 5 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 3

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 5 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 5 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 5to Trimestre 3

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Trimestre 1
router.get('/2019/:id_escuela/6/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 1
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 1 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 1

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 6 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 6 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Trimestre 1

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Trimestre 2
router.get('/2019/:id_escuela/6/2', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 2
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 2 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 2

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 6 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 2 Año 6 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Trimestre 2

//Inicio de Get que muestra a los alumnos y calificaciones de 6to Trimestre 3
router.get('/2019/:id_escuela/6/3', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Consulta para mostrar el Promedio de Trimestre 3
  const listcalificacionescuarto_sexto2019 = await db.query('SELECT AVG(espanol) AS sumespanol,AVG(matematicas) AS sumatematicas,AVG(cien_naturales) AS sumcien_naturales,AVG(geografia) AS sumgeografia,AVG(historia) AS sumhistoria,AVG(form_civ_etica) AS sumform_civ_etica,AVG(artes) AS sumartes,AVG(edu_socioemocional) AS sumedu_socioemocional,AVG(edu_fisica) AS sumedu_fisica FROM newcuarto_sexto WHERE trimestre = 3 AND grado = 6 AND id_escuela = ?',[encoid_escuela]);
  //Fin de Consulta para mostrar el Promedio de Trimestre 3

  //Inicio de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 6 a mediados 2019
  const calificacionesT42019 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+ newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Consulta para mostrar alumnos y las calificaciones de Trimestre 3 Año 6 a mediados 2019

  //console.log(listcalificacionescuarto_sexto2019);
  res.render('graficas/2019', {listcalificacionescuarto_sexto2019,calificacionesT42019});
});
//Fin de Get que muestra a los alumnos y calificaciones de 6to Trimestre 3

// *******************************************************************************************************
//INICIO DE MAPA CURRICULAR AGREGAR TODAS LAS MATERIAS

//Inicio de Get que muestra a los alumnos que agregaron las materias que quieran

//Inicio para mostrar tabla y grafica de periodo 1
router.get('/all/:id_escuela/:id_materias/1', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 1
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 1 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ? ORDER BY matricula.nombres ASC', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 1

  //Inicio para mostrar la grafica segun su materia escogida Periodo 1
  const matcal1 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 1  AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 1


  res.render('graficas/all', {listalumnos,listmaterias,matcal1});
});
//Fin para mostrar tabla y grafica de periodo 1

//Inicio para mostrar tabla y grafica de periodo 2
router.get('/all/:id_escuela/:id_materias/2', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 2
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 2 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 2

  //Inicio para mostrar la grafica segun su materia escogida Periodo 2
  const matcal2 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 2  AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 2


  res.render('graficas/all', {listalumnos,listmaterias,matcal2});
});
//Fin para mostrar tabla y grafica de periodo 2

//Inicio para mostrar tabla y grafica de periodo 3
router.get('/all/:id_escuela/:id_materias/3', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 3
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 3 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 3

  //Inicio para mostrar la grafica segun su materia escogida Periodo 3
  const matcal3 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 3  AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 3


  res.render('graficas/all', {listalumnos,listmaterias,matcal3});
});
//Fin para mostrar tabla y grafica de periodo 3

//Inicio para mostrar tabla y grafica de periodo 4
router.get('/all/:id_escuela/:id_materias/4', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 4
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 4 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 4

  //Inicio para mostrar la grafica segun su materia escogida Periodo 4
  const matcal4 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 4  AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 4


  res.render('graficas/all', {listalumnos,listmaterias,matcal4});
});
//Fin para mostrar tabla y grafica de periodo 4

//Inicio para mostrar tabla y grafica de periodo 5
router.get('/all/:id_escuela/:id_materias/5', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 5
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 5

  //Inicio para mostrar la grafica segun su materia escogida Periodo 5
  const matcal5 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 5 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 5


  res.render('graficas/all', {listalumnos,listmaterias,matcal5});
});
//Fin para mostrar tabla y grafica de periodo 5

//Inicio para mostrar tabla y grafica de periodo 6
router.get('/all/:id_escuela/:id_materias/6', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 6
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 6

  //Inicio para mostrar la grafica segun su materia escogida Periodo 6
  const matcal6 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 6 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 6


  res.render('graficas/all', {listalumnos,listmaterias,matcal6});
});
//Fin para mostrar tabla y grafica de periodo 6

//Inicio para mostrar tabla y grafica de periodo 7
router.get('/all/:id_escuela/:id_materias/7', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 7
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 7

  //Inicio para mostrar la grafica segun su materia escogida Periodo 7
  const matcal7 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 7 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 7


  res.render('graficas/all', {listalumnos,listmaterias,matcal7});
});
//Fin para mostrar tabla y grafica de periodo 7

//Inicio para mostrar tabla y grafica de periodo 8
router.get('/all/:id_escuela/:id_materias/8', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 8
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 8

  //Inicio para mostrar la grafica segun su materia escogida Periodo 8
  const matcal8 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 8 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 8


  res.render('graficas/all', {listalumnos,listmaterias,matcal8});
});
//Fin para mostrar tabla y grafica de periodo 8

//Inicio para mostrar tabla y grafica de periodo 9
router.get('/all/:id_escuela/:id_materias/9', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 9
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 9

  //Inicio para mostrar la grafica segun su materia escogida Periodo 9
  const matcal9 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 9 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 9


  res.render('graficas/all', {listalumnos,listmaterias,matcal9});
});
//Fin para mostrar tabla y grafica de periodo 9

//Inicio para mostrar tabla y grafica de periodo 10
router.get('/all/:id_escuela/:id_materias/10', isLoggedIn, async (req, res) => {
  const { id_escuela, id_materias } = req.params;
  let encoid_escuela = atob(id_escuela);
  let encoid_materias = atob(id_materias);

  //Inicio para mostrar la materia en la tabla de calificaciones
  const listmaterias = await db.query('SELECT * FROM materias WHERE id_escuela = ? AND id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la materia en la tabla de calificaciones

  //Inicio para mostrar los alumnos segun su materia escogida Periodo 10
  const listalumnos = await db.query('SELECT calificaciones.id_calificaciones,calificaciones.id_materias,calificaciones.id_escuela,calificaciones.id_matricula,calificaciones.periodo,calificaciones.grado,calificaciones.calificaciones,matricula.id_matricula,matricula.id_escuela,matricula.mapcurricular,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM calificaciones INNER JOIN matricula ON calificaciones.id_matricula = matricula.id_matricula WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar los alumnos segun su materia escogida Periodo 10

  //Inicio para mostrar la grafica segun su materia escogida Periodo 10
  const matcal10 = await db.query('SELECT SUM(CASE WHEN calificaciones < 5 THEN 1 ELSE 0 END) AS menor5,SUM(CASE WHEN calificaciones = 6 THEN 1 ELSE 0 END) AS igual6,SUM(CASE WHEN calificaciones = 7 THEN 1 ELSE 0 END) AS igual7,SUM(CASE WHEN calificaciones = 8 THEN 1 ELSE 0 END) AS igual8,SUM(CASE WHEN calificaciones = 9 THEN 1 ELSE 0 END) AS igual9,SUM(CASE WHEN calificaciones = 10 THEN 1 ELSE 0 END) AS igual10 FROM calificaciones WHERE calificaciones.periodo = 10 AND calificaciones.id_escuela = ? AND calificaciones.id_materias = ?', [encoid_escuela,encoid_materias]);
  //Fin para mostrar la grafica segun su materia escogida Periodo 10


  res.render('graficas/all', {listalumnos,listmaterias,matcal10});
});
//Fin para mostrar tabla y grafica de periodo 10

//Fin de Get que muestra a los alumnos que agregaron las materias que quieran

module.exports = router;
