const express = require('express');
const router = express.Router();
const atob = require('atob');

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//Get que se usa para mostrar los alumnos que si estan calificados 1ro
router.get('/calificado/:id_matricula/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 1ro, Bimestre 1
  const calificarB1 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro Bimestre 1
  //Inicio de Calificaciones de 1ro, Bimestre 2
  const calificarB2 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 2
  //Inicio de Calificaciones de 1ro, Bimestre 3
  const calificarB3 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 3
  //Inicio de Calificaciones de 1ro, Bimestre 4
  const calificarB4 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 4 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 4
  //Inicio de Calificaciones de 1ro, Bimestre 5
  const calificarB5 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 5 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 5
  //Inicio de If
  const calificar_1_3B1 = [1];
  const calificar_1_3B2 = [2];
  const calificar_1_3B3 = [3];
  const calificar_1_3B4 = [4];
  const calificar_1_3B5 = [5];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar);
  res.render('calificaciones/calificado', {calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar:porcalificar[0],calificar_1_3B1,calificar_1_3B2,calificar_1_3B3,calificar_1_3B4,calificar_1_3B5});
});

//Get que se usa para mostrar los alumnos que si estan calificados 2do
router.get('/calificado/:id_matricula/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 2do, Bimestre 1
  const calificarB1 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 2do Bimestre 1
  //Inicio de Calificaciones de 2do, Bimestre 2
  const calificarB2 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 2do, Bimestre 2
  //Inicio de Calificaciones de 2do, Bimestre 3
  const calificarB3 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 2do, Bimestre 3
  //Inicio de Calificaciones de 2do, Bimestre 4
  const calificarB4 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 4 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 2do, Bimestre 4
  //Inicio de Calificaciones de 2do, Bimestre 5
  const calificarB5 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 5 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 2do, Bimestre 5
  //Inicio de If
  const calificar_1_3B1 = [1];
  const calificar_1_3B2 = [2];
  const calificar_1_3B3 = [3];
  const calificar_1_3B4 = [4];
  const calificar_1_3B5 = [5];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar);
  res.render('calificaciones/calificado', {calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar:porcalificar[0],calificar_1_3B1,calificar_1_3B2,calificar_1_3B3,calificar_1_3B4,calificar_1_3B5});
});

//Get que se usa para mostrar los alumnos que si estan calificados 3ro
router.get('/calificado/:id_matricula/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 3ro, Bimestre 1
  const calificarB1 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro Bimestre 1
  //Inicio de Calificaciones de 3ro, Bimestre 2
  const calificarB2 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro, Bimestre 2
  //Inicio de Calificaciones de 3ro, Bimestre 3
  const calificarB3 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro, Bimestre 3
  //Inicio de Calificaciones de 3ro, Bimestre 4
  const calificarB4 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 4 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro, Bimestre 4
  //Inicio de Calificaciones de 3ro, Bimestre 5
  const calificarB5 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,primero_tercero.id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.bimestre,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles,(primero_tercero.espanol+primero_tercero.matematicas+primero_tercero.cono_medio+primero_tercero.cien_nat_tec+primero_tercero.his_pais_conv+primero_tercero.artes+primero_tercero.edu_socio+primero_tercero.edu_fisica+primero_tercero.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.bimestre = 5 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro, Bimestre 5
  //Inicio de If
  const calificar_1_3B1 = [1];
  const calificar_1_3B2 = [2];
  const calificar_1_3B3 = [3];
  const calificar_1_3B4 = [4];
  const calificar_1_3B5 = [5];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar);
  res.render('calificaciones/calificado', {calificarB1,calificarB2,calificarB3,calificarB4,calificarB5,porcalificar:porcalificar[0],calificar_1_3B1,calificar_1_3B2,calificar_1_3B3,calificar_1_3B4,calificar_1_3B5});
});

//Get que se usa para mostrar los alumnos que si estan calificados 4to
router.get('/calificado/:id_matricula/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 4to, Bimestre 1
  const calificar_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Bimestre 1
  //Inicio de Calificaciones de 4to, Bimestre 2
  const calificar_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Bimestre 2
  //Inicio de Calificaciones de 4to, Bimestre 3
  const calificar_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Bimestre 3
  //Inicio de Calificaciones de 4to, Bimestre 4
  const calificar_cuarto_sextoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 4 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Bimestre 4
  //Inicio de Calificaciones de 4to, Bimestre 5
  const calificar_cuarto_sextoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 5 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Bimestre 5
  //Inicio de If
  const calificar_4_6B1 = [1];
  const calificar_4_6B2 = [2];
  const calificar_4_6B3 = [3];
  const calificar_4_6B4 = [4];
  const calificar_4_6B5 = [5];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,calificar_cuarto_sextoB4,calificar_cuarto_sextoB5,porcalificar_cuarto_sexto);
  res.render('calificaciones/calificado', {calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,calificar_cuarto_sextoB4,calificar_cuarto_sextoB5,porcalificar_cuarto_sexto:porcalificar_cuarto_sexto[0],calificar_4_6B1,calificar_4_6B2,calificar_4_6B3,calificar_4_6B4,calificar_4_6B5});
});

//Get que se usa para mostrar los alumnos que si estan calificados 5to
router.get('/calificado/:id_matricula/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 5to, Bimestre 1
  const calificar_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Bimestre 1
  //Inicio de Calificaciones de 5to, Bimestre 2
  const calificar_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Bimestre 2
  //Inicio de Calificaciones de 5to, Bimestre 3
  const calificar_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Bimestre 3
  //Inicio de Calificaciones de 5to, Bimestre 4
  const calificar_cuarto_sextoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 4 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Bimestre 4
  //Inicio de Calificaciones de 5to, Bimestre 5
  const calificar_cuarto_sextoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 5 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Bimestre 5
  //Inicio de If
  const calificar_4_6B1 = [1];
  const calificar_4_6B2 = [2];
  const calificar_4_6B3 = [3];
  const calificar_4_6B4 = [4];
  const calificar_4_6B5 = [5];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,calificar_cuarto_sextoB4,calificar_cuarto_sextoB5,porcalificar_cuarto_sexto);
  res.render('calificaciones/calificado', {calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,calificar_cuarto_sextoB4,calificar_cuarto_sextoB5,porcalificar_cuarto_sexto:porcalificar_cuarto_sexto[0],calificar_4_6B1,calificar_4_6B2,calificar_4_6B3,calificar_4_6B4,calificar_4_6B5});
});

//Get que se usa para mostrar los alumnos que si estan calificados 6to
router.get('/calificado/:id_matricula/6', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 6to, Bimestre 1
  const calificar_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Bimestre 1
  //Inicio de Calificaciones de 6to, Bimestre 2
  const calificar_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Bimestre 2
  //Inicio de Calificaciones de 6to, Bimestre 3
  const calificar_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Bimestre 3
  //Inicio de Calificaciones de 6to, Bimestre 4
  const calificar_cuarto_sextoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 4 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Bimestre 4
  //Inicio de Calificaciones de 6to, Bimestre 5
  const calificar_cuarto_sextoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,cuarto_sexto.id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.bimestre,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.bimestre = 5 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Bimestre 5
  //Inicio de If
  const calificar_4_6B1 = [1];
  const calificar_4_6B2 = [2];
  const calificar_4_6B3 = [3];
  const calificar_4_6B4 = [4];
  const calificar_4_6B5 = [5];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,calificar_cuarto_sextoB4,calificar_cuarto_sextoB5,porcalificar_cuarto_sexto);
  res.render('calificaciones/calificado', {calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,calificar_cuarto_sextoB4,calificar_cuarto_sextoB5,porcalificar_cuarto_sexto:porcalificar_cuarto_sexto[0],calificar_4_6B1,calificar_4_6B2,calificar_4_6B3,calificar_4_6B4,calificar_4_6B5});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/1/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB1);
  res.render('calificaciones/calificar', {no_calificadoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/1/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB2);
  res.render('calificaciones/calificar', {no_calificadoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/1/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB3);
  res.render('calificaciones/calificar', {no_calificadoB3});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 4 y calificar sus materias
router.get('/calificar/:id_matricula/1/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB4);
  res.render('calificaciones/calificar', {no_calificadoB4});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 5 y calificar sus materias
router.get('/calificar/:id_matricula/1/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB5);
  res.render('calificaciones/calificar', {no_calificadoB5});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 2do Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/2/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB1);
  res.render('calificaciones/calificar', {no_calificadoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/2/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB2);
  res.render('calificaciones/calificar', {no_calificadoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/2/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB3);
  res.render('calificaciones/calificar', {no_calificadoB3});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 4 y calificar sus materias
router.get('/calificar/:id_matricula/2/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB4);
  res.render('calificaciones/calificar', {no_calificadoB4});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 5 y calificar sus materias
router.get('/calificar/:id_matricula/2/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB5);
  res.render('calificaciones/calificar', {no_calificadoB5});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 3do Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/3/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB1);
  res.render('calificaciones/calificar', {no_calificadoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/3/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB2);
  res.render('calificaciones/calificar', {no_calificadoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/3/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB3);
  res.render('calificaciones/calificar', {no_calificadoB3});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 4 y calificar sus materias
router.get('/calificar/:id_matricula/3/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB4);
  res.render('calificaciones/calificar', {no_calificadoB4});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 5 y calificar sus materias
router.get('/calificar/:id_matricula/3/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoB5);
  res.render('calificaciones/calificar', {no_calificadoB5});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/4/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB1);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/4/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB2);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/4/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB3);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB3});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 4 y calificar sus materias
router.get('/calificar/:id_matricula/4/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB4);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB4});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 5 y calificar sus materias
router.get('/calificar/:id_matricula/4/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB5);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB5});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 5to Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/5/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB1);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/5/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB2);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/5/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB3);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB3});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 4 y calificar sus materias
router.get('/calificar/:id_matricula/5/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB4);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB4});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 5 y calificar sus materias
router.get('/calificar/:id_matricula/5/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB5);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB5});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 6to Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/6/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB1);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/6/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB2);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/6/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB3);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB3});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 4 y calificar sus materias
router.get('/calificar/:id_matricula/6/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB4 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB4);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB4});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 5 y calificar sus materias
router.get('/calificar/:id_matricula/6/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB5 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB5);
  res.render('calificaciones/calificar', {no_calificado_cuarto_sextoB5});
});

//Post que se usa para calificar un nuevo alumno de 1ro
router.post('/calificar/1/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { bimestre, espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    bimestre,
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
  await db.query('INSERT INTO primero_tercero set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/calificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Post que se usa para calificar un nuevo alumno de 2do
router.post('/calificar/2/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { bimestre, espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    bimestre,
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
  await db.query('INSERT INTO primero_tercero set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/calificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Post que se usa para calificar un nuevo alumno de 3ro
router.post('/calificar/3/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { bimestre, espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    bimestre,
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
  await db.query('INSERT INTO primero_tercero set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/calificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Insertara calificaciones de 4to grado
router.post('/calificar/4/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { bimestre, espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    bimestre,
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
  await db.query('INSERT INTO cuarto_sexto set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/calificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Insertara calificaciones de 5to grado
router.post('/calificar/5/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { bimestre, espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    bimestre,
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
  await db.query('INSERT INTO cuarto_sexto set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/calificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Insertara calificaciones de 6to grado
router.post('/calificar/6/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { bimestre, espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    bimestre,
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
  await db.query('INSERT INTO cuarto_sexto set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/calificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Inicio de Get que muestra a los alumnos y calificaciones de 1ro de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Get que muestra a los alumnos y calificaciones de 1ro Bimestre 1
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de graficas 1ro Bimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Bimestre 1

  //Get que muestra a los alumnos y calificaciones de 1ro Bimestre 2
  const listcalificacionesprimero_terceroB2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de graficas 1ro Bimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Bimestre 2

  //Get que muestra a los alumnos y calificaciones de 1ro Bimestre 3
  const listcalificacionesprimero_terceroB3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de graficas 1ro Bimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Bimestre 3

  //Get que muestra a los alumnos y calificaciones de 1ro Bimestre 4
  const listcalificacionesprimero_terceroB4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de graficas 1ro Bimestre 4
  const grafica4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Bimestre 4

  //Get que muestra a los alumnos y calificaciones de 1ro Bimestre 5
  const listcalificacionesprimero_terceroB5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de graficas 1ro Bimestre 5
  const grafica5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 1 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Bimestre 5
  //console.log(listcalificacionesprimero_terceroB1,listcalificacionesprimero_terceroB2,listcalificacionesprimero_terceroB3,listcalificacionesprimero_terceroB4,listcalificacionesprimero_terceroB5);
  res.render('calificaciones/list', {listcalificacionesprimero_terceroB1,listcalificacionesprimero_terceroB2,listcalificacionesprimero_terceroB3,listcalificacionesprimero_terceroB4,listcalificacionesprimero_terceroB5,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0],grafica4:grafica4[0],grafica5:grafica5[0]});
});
//Fin de Get que muestra a los alumnos y calificaciones de 1ro de primaria (lista completa de alumnos cuando estan calificados)

//Get que muestra a los alumnos y calificaciones de 2do de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/2', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 1
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 1

  //Inicio de graficas 2do, Bimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do, Bimestre 1

  //Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 2
  const listcalificacionesprimero_terceroB2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 2

  //Inicio de graficas 2do, Bimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do, Bimestre 2

  //Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 3
  const listcalificacionesprimero_terceroB3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 3

  //Inicio de graficas 2do, Bimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do, Bimestre 3

  //Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 4
  const listcalificacionesprimero_terceroB4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 4

  //Inicio de graficas 2do, Bimestre 4
  const grafica4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do, Bimestre 4

  //Inicio de Get que muestra a los alumnos y calificaciones de 2do Bimestre 5
  const listcalificacionesprimero_terceroB5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 2do Bimestre 5

  //Inicio de graficas 2do, Bimestre 5
  const grafica5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 2 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do, Bimestre 5

  //console.log(listcalificacionesprimero_terceroB1,listcalificacionesprimero_terceroB2,listcalificacionesprimero_terceroB3,listcalificacionesprimero_terceroB4,listcalificacionesprimero_terceroB5);
  res.render('calificaciones/list', {listcalificacionesprimero_terceroB1,listcalificacionesprimero_terceroB2,listcalificacionesprimero_terceroB3,listcalificacionesprimero_terceroB4,listcalificacionesprimero_terceroB5,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0],grafica4:grafica4[0],grafica5:grafica5[0]});
});

//Get que muestra a los alumnos y calificaciones de 3ro de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/3', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 1
  const listcalificacionesprimero_terceroB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 1

  //Inicio de graficas 3ro, Bimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3ro, Bimestre 1

  //Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 2
  const listcalificacionesprimero_terceroB2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 2

  //Inicio de graficas 3ro, Bimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3ro, Bimestre 2

  //Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 3
  const listcalificacionesprimero_terceroB3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 3

  //Inicio de graficas 3ro, Bimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3ro, Bimestre 3

  //Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 4
  const listcalificacionesprimero_terceroB4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 4

  //Inicio de graficas 3ro, Bimestre 4
  const grafica4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 4 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3ro, Bimestre 4

  //Inicio de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 5
  const listcalificacionesprimero_terceroB5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero, primero_tercero.id_matricula, primero_tercero.id_escuela, primero_tercero.grado, primero_tercero.bimestre, primero_tercero.espanol, primero_tercero.matematicas, primero_tercero.cono_medio, primero_tercero.cien_nat_tec, primero_tercero.his_pais_conv, primero_tercero.artes, primero_tercero.edu_socio, primero_tercero.edu_fisica, primero_tercero.ingles,(primero_tercero.espanol + primero_tercero.matematicas + primero_tercero.cono_medio + primero_tercero.cien_nat_tec + primero_tercero.his_pais_conv + primero_tercero.artes + primero_tercero.edu_socio + primero_tercero.edu_fisica + primero_tercero.ingles)/9 AS P FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get que muestra a los alumnos y calificaciones de 3ro Bimestre 5

  //Inicio de graficas 3ro, Bimestre 5
  const grafica5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, primero_tercero.id_primerotercero, primero_tercero.id_matricula, TO_BASE64(primero_tercero.id_escuela) AS id_escuela, primero_tercero.grado, primero_tercero.bimestre FROM matricula INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula WHERE primero_tercero.grado = 3 AND primero_tercero.bimestre = 5 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3ro, Bimestre 5

  //console.log(listcalificacionesprimero_terceroB1,listcalificacionesprimero_terceroB2,listcalificacionesprimero_terceroB3,listcalificacionesprimero_terceroB4,listcalificacionesprimero_terceroB5);
  res.render('calificaciones/list', {listcalificacionesprimero_terceroB1,listcalificacionesprimero_terceroB2,listcalificacionesprimero_terceroB3,listcalificacionesprimero_terceroB4,listcalificacionesprimero_terceroB5,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0],grafica4:grafica4[0],grafica5:grafica5[0]});
});

//Get que muestra a los alumnos y calificaciones de 4to de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/4', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 1
  const listcalificacionescuarto_sextoB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 1

  //Inicio de graficas 4to, Bimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to, Bimestre 1

  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 2
  const listcalificacionescuarto_sextoB2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 2

  //Inicio de graficas 4to, Bimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to, Bimestre 2

  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 3
  const listcalificacionescuarto_sextoB3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 3

  //Inicio de graficas 4to, Bimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to, Bimestre 3

  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 4
  const listcalificacionescuarto_sextoB4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 4

  //Inicio de graficas 4to, Bimestre 4
  const grafica4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to, Bimestre 4

  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 5
  const listcalificacionescuarto_sextoB5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 4to Bimestre 5

  //Inicio de graficas 4to, Bimestre 5
  const grafica5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 4 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to, Bimestre 5

  //console.log(listcalificacionescuarto_sextoB1,listcalificacionescuarto_sextoB2,listcalificacionescuarto_sextoB3,listcalificacionescuarto_sextoB4,listcalificacionescuarto_sextoB5);
  res.render('calificaciones/list', {listcalificacionescuarto_sextoB1,listcalificacionescuarto_sextoB2,listcalificacionescuarto_sextoB3,listcalificacionescuarto_sextoB4,listcalificacionescuarto_sextoB5,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0],grafica4:grafica4[0],grafica5:grafica5[0]});
});

//Get que muestra a los alumnos y calificaciones de 5to de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/5', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 1
  const listcalificacionescuarto_sextoB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 1

  //Inicio de graficas 5to, Bimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to, Bimestre 1

  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 2
  const listcalificacionescuarto_sextoB2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 2

  //Inicio de graficas 5to, Bimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to, Bimestre 2

  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 3
  const listcalificacionescuarto_sextoB3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 3

  //Inicio de graficas 5to, Bimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to, Bimestre 3

  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 4
  const listcalificacionescuarto_sextoB4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 4

  //Inicio de graficas 5to, Bimestre 4
  const grafica4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to, Bimestre 4

  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 5
  const listcalificacionescuarto_sextoB5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 5to Bimestre 5

  //Inicio de graficas 5to, Bimestre 5
  const grafica5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 5 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to, Bimestre 5

  //console.log(listcalificacionescuarto_sextoB1,listcalificacionescuarto_sextoB2,listcalificacionescuarto_sextoB3,listcalificacionescuarto_sextoB4,listcalificacionescuarto_sextoB5);
  res.render('calificaciones/list', {listcalificacionescuarto_sextoB1,listcalificacionescuarto_sextoB2,listcalificacionescuarto_sextoB3,listcalificacionescuarto_sextoB4,listcalificacionescuarto_sextoB5,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0],grafica4:grafica4[0],grafica5:grafica5[0]});
});

//Get que muestra a los alumnos y calificaciones de 6to de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/6', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 1
  const listcalificacionescuarto_sextoB1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 1

  //Inicio de graficas 6to, Bimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to, Bimestre 1

  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 2
  const listcalificacionescuarto_sextoB2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 2

  //Inicio de graficas 6to, Bimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to, Bimestre 2

  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 3
  const listcalificacionescuarto_sextoB3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 3

  //Inicio de graficas 6to, Bimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to, Bimestre 3

  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 4
  const listcalificacionescuarto_sextoB4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 4

  //Inicio de graficas 6to, Bimestre 4
  const grafica4 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 4 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to, Bimestre 4

  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 5
  const listcalificacionescuarto_sextoB5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, matricula.apellido_paterno, matricula.apellido_materno, matricula.nombres, TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto, cuarto_sexto.id_matricula, cuarto_sexto.id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre, cuarto_sexto.espanol, cuarto_sexto.matematicas, cuarto_sexto.cien_naturales, cuarto_sexto.historia, cuarto_sexto.geografia, cuarto_sexto.form_civ_etica, cuarto_sexto.artes, cuarto_sexto.edu_fisica, cuarto_sexto.ingles,(cuarto_sexto.espanol + cuarto_sexto.matematicas + cuarto_sexto.cien_naturales + cuarto_sexto.historia + cuarto_sexto.geografia + cuarto_sexto.form_civ_etica + cuarto_sexto.artes + cuarto_sexto.edu_fisica + cuarto_sexto.ingles)/9 AS P FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Inicio de Get que muestra a los alumnos y calificaciones de 6to Bimestre 5

  //Inicio de graficas 6to, Bimestre 5
  const grafica5 = await db.query('SELECT matricula.id_matricula, matricula.id_escuela, cuarto_sexto.id_cuartosexto, cuarto_sexto.id_matricula, TO_BASE64(cuarto_sexto.id_escuela) AS id_escuela, cuarto_sexto.grado, cuarto_sexto.bimestre FROM matricula INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula WHERE cuarto_sexto.grado = 6 AND cuarto_sexto.bimestre = 5 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to, Bimestre 5

  //console.log(listcalificacionescuarto_sextoB1,listcalificacionescuarto_sextoB2,listcalificacionescuarto_sextoB3,listcalificacionescuarto_sextoB4,listcalificacionescuarto_sextoB5);
  res.render('calificaciones/list', {listcalificacionescuarto_sextoB1,listcalificacionescuarto_sextoB2,listcalificacionescuarto_sextoB3,listcalificacionescuarto_sextoB4,listcalificacionescuarto_sextoB5,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0],grafica4:grafica4[0],grafica5:grafica5[0]});
});

//-------------------------------------EDICION--------------------------------------------
//Inicio de actualizar calificaciones de 1ro
router.get('/edit/1/:id_primerotercero', isLoggedIn, async (req,res) => {
  const { id_primerotercero, grado } = req.params;
  let encoid_primerotercero = atob(id_primerotercero);
  const edit_calificar_primero_tercero = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,TO_BASE64(primero_tercero.id_matricula) AS id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.id_primerotercero = ?',[encoid_primerotercero]);

  //console.log(edit_calificar_primero_tercero);
  res.render('calificaciones/edit', {edit_calificar_primero_tercero});
});

router.post('/edit/1/:id_primerotercero', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_primerotercero,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  let encoid_primerotercero = atob(id_primerotercero);
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
  await db.query('UPDATE primero_tercero set ? WHERE id_primerotercero = ?', [editCalif1_3, encoid_primerotercero]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 1ro

//Inicio de actualizar calificaciones de 2do
router.get('/edit/2/:id_primerotercero', isLoggedIn, async (req,res) => {
  const { id_primerotercero, grado } = req.params;
  const edit_calificar_primero_tercero = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,TO_BASE64(primero_tercero.id_matricula) AS id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.id_primerotercero = ?',[id_primerotercero]);

  //console.log(edit_calificar_primero_tercero);
  res.render('calificaciones/edit', {edit_calificar_primero_tercero});
});

router.post('/edit/2/:id_primerotercero', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_primerotercero,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  let encoid_primerotercero = atob(id_primerotercero);
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
  await db.query('UPDATE primero_tercero set ? WHERE id_primerotercero = ?', [editCalif1_3, encoid_primerotercero]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 2do

//Inicio de actualizar calificaciones de 3ro
router.get('/edit/3/:id_primerotercero', isLoggedIn, async (req,res) => {
  const { id_primerotercero, grado } = req.params;
  const edit_calificar_primero_tercero = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(primero_tercero.id_primerotercero) AS id_primerotercero,TO_BASE64(primero_tercero.id_matricula) AS id_matricula,primero_tercero.id_escuela,primero_tercero.grado,primero_tercero.espanol,primero_tercero.matematicas,primero_tercero.cono_medio,primero_tercero.cien_nat_tec,primero_tercero.his_pais_conv,primero_tercero.artes,primero_tercero.edu_socio,primero_tercero.edu_fisica,primero_tercero.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN primero_tercero ON matricula.id_matricula = primero_tercero.id_matricula Where primero_tercero.id_primerotercero = ?',[id_primerotercero]);

  //console.log(edit_calificar_primero_tercero);
  res.render('calificaciones/edit', {edit_calificar_primero_tercero});
});

router.post('/edit/3/:id_primerotercero', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_primerotercero,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, cien_nat_tec, his_pais_conv, artes, edu_socio, edu_fisica, ingles } = req.body;
  let encoid_primerotercero = atob(id_primerotercero);
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
  await db.query('UPDATE primero_tercero set ? WHERE id_primerotercero = ?', [editCalif1_3, encoid_primerotercero]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 3ro

//Inicio de actualizar calificaciones de 4to
router.get('/edit/4/:id_cuartosexto', isLoggedIn, async (req,res) => {
  const { id_cuartosexto, grado } = req.params;
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,TO_BASE64(cuarto_sexto.id_matricula) AS id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.id_cuartosexto = ?',[id_cuartosexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('calificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/4/:id_cuartosexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_cuartosexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  let encoid_cuartosexto = atob(id_cuartosexto);
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
  await db.query('UPDATE cuarto_sexto set ? WHERE id_cuartosexto = ?', [editCalif4_6, encoid_cuartosexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 4to

//Inicio de actualizar calificaciones de 5to
router.get('/edit/5/:id_cuartosexto', isLoggedIn, async (req,res) => {
  const { id_cuartosexto, grado } = req.params;
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,TO_BASE64(cuarto_sexto.id_matricula) AS id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.id_cuartosexto = ?',[id_cuartosexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('calificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/5/:id_cuartosexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_cuartosexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  let encoid_cuartosexto = atob(id_cuartosexto);
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
  await db.query('UPDATE cuarto_sexto set ? WHERE id_cuartosexto = ?', [editCalif4_6, encoid_cuartosexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 5to

//Inicio de actualizar calificaciones de 6to
router.get('/edit/6/:id_cuartosexto', isLoggedIn, async (req,res) => {
  const { id_cuartosexto, grado } = req.params;
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(cuarto_sexto.id_cuartosexto) AS id_cuartosexto,TO_BASE64(cuarto_sexto.id_matricula) AS id_matricula,cuarto_sexto.id_escuela,cuarto_sexto.grado,cuarto_sexto.espanol,cuarto_sexto.matematicas,cuarto_sexto.cien_naturales,cuarto_sexto.historia,cuarto_sexto.geografia,cuarto_sexto.form_civ_etica,cuarto_sexto.artes,cuarto_sexto.edu_fisica,cuarto_sexto.ingles FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN cuarto_sexto ON matricula.id_matricula = cuarto_sexto.id_matricula Where cuarto_sexto.id_cuartosexto = ?',[id_cuartosexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('calificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/6/:id_cuartosexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, id_cuartosexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, historia, geografia, form_civ_etica, artes, edu_fisica, ingles } = req.body;
  let encoid_cuartosexto = atob(id_cuartosexto);
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
  await db.query('UPDATE cuarto_sexto set ? WHERE id_cuartosexto = ?', [editCalif4_6, encoid_cuartosexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/calificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 6to


module.exports = router;
