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
  const calificarT1 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.trimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro Bimestre 1
  //Inicio de Calificaciones de 1ro, Bimestre 2
  const calificarT2 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.trimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 2
  //Inicio de Calificaciones de 1ro, Bimestre 3
  const calificarT3 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.trimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 3

  //Inicio de If
  const calificar_1_2T1 = [1];
  const calificar_1_2T2 = [2];
  const calificar_1_2T3 = [3];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificarT1,calificarT2,calificarT3,porcalificar);
  res.render('newcalificaciones/calificado', {calificarT1,calificarT2,calificarT3,porcalificar:porcalificar[0],calificar_1_2T1,calificar_1_2T2,calificar_1_2T3});
});

//Get que se usa para mostrar los alumnos que si estan calificados 2do
router.get('/calificado/:id_matricula/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 1ro, Bimestre 1
  const calificarT1 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.trimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro Bimestre 1
  //Inicio de Calificaciones de 1ro, Bimestre 2
  const calificarT2 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.trimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 2
  //Inicio de Calificaciones de 1ro, Bimestre 3
  const calificarT3 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica,(newprimero_segundo.espanol+newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.trimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 1ro, Bimestre 3

  //Inicio de If
  const calificar_1_2T1 = [1];
  const calificar_1_2T2 = [2];
  const calificar_1_2T3 = [3];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificarT1,calificarT2,calificarT3,porcalificar);
  res.render('newcalificaciones/calificado', {calificarT1,calificarT2,calificarT3,porcalificar:porcalificar[0],calificar_1_2T1,calificar_1_2T2,calificar_1_2T3});
});

//Get que se usa para mostrar los alumnos que si estan calificados 3ro
router.get('/calificado/:id_matricula/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 3ro, Trimestre 1
  const calificar3T1 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newtercero.idnewtercero) AS idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.	enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional,newtercero.edu_fisica,(newtercero.espanol+newtercero.matematicas+newtercero.cien_naturales+newtercero.enti_vivo+newtercero.form_civ_etica+newtercero.artes+newtercero.edu_socioemocional+newtercero.edu_fisica)/8 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula Where newtercero.trimestre = 1 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro Trimestre 1
  //Inicio de Calificaciones de 3ro, Trimestre 2
  const calificar3T2 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newtercero.idnewtercero) AS idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.	enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional,newtercero.edu_fisica,(newtercero.espanol+newtercero.matematicas+newtercero.cien_naturales+newtercero.enti_vivo+newtercero.form_civ_etica+newtercero.artes+newtercero.edu_socioemocional+newtercero.edu_fisica)/8 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula Where newtercero.trimestre = 2 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro, Trimestre 2
  //Inicio de Calificaciones de 3ro, Trimestre 3
  const calificar3T3 = await db.query('SELECT escuela.id_escuela,escuela.grado, matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newtercero.idnewtercero) AS idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.	enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional,newtercero.edu_fisica,(newtercero.espanol+newtercero.matematicas+newtercero.cien_naturales+newtercero.enti_vivo+newtercero.form_civ_etica+newtercero.artes+newtercero.edu_socioemocional+newtercero.edu_fisica)/8 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula Where newtercero.trimestre = 3 AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 3ro, Trimestre 3

  //Inicio de If
  const calificar_3T1 = [1];
  const calificar_3T2 = [2];
  const calificar_3T3 = [3];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificar3T1,calificar3T2,calificar3T3,porcalificar);
  res.render('newcalificaciones/calificado', {calificar3T1,calificar3T2,calificar3T3,porcalificar:porcalificar[0],calificar_3T1,calificar_3T2,calificar_3T3});
});

//Get que se usa para mostrar los alumnos que si estan calificados 4to
router.get('/calificado/:id_matricula/4', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 4to, Trimestre 1
  const calificar_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 1  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Trimestre 1
  //Inicio de Calificaciones de 4to, Trimestre 2
  const calificar_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 2  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Trimestre 2
  //Inicio de Calificaciones de 4to, Trimestre 3
  const calificar_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 3  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 4to, Trimestre 3

  //Inicio de If
  const calificar_4_6B1 = [1];
  const calificar_4_6B2 = [2];
  const calificar_4_6B3 = [3];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,porcalificar_cuarto_sexto);
  res.render('newcalificaciones/calificado', {calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,porcalificar_cuarto_sexto:porcalificar_cuarto_sexto[0],calificar_4_6B1,calificar_4_6B2,calificar_4_6B3});
});

//Get que se usa para mostrar los alumnos que si estan calificados 5to
router.get('/calificado/:id_matricula/5', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 5to, Trimestre 1
  const calificar_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 1  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Trimestre 1
  //Inicio de Calificaciones de 5to, Trimestre 2
  const calificar_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 2  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Trimestre 2
  //Inicio de Calificaciones de 5to, Trimestre 3
  const calificar_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 3  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 5to, Trimestre 3

  //Inicio de If
  const calificar_4_6B1 = [1];
  const calificar_4_6B2 = [2];
  const calificar_4_6B3 = [3];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,porcalificar_cuarto_sexto);
  res.render('newcalificaciones/calificado', {calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,porcalificar_cuarto_sexto:porcalificar_cuarto_sexto[0],calificar_4_6B1,calificar_4_6B2,calificar_4_6B3});
});

//Get que se usa para mostrar los alumnos que si estan calificados 6to
router.get('/calificado/:id_matricula/6', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  //Inicio de Calificaciones de 6to, Trimestre 1
  const calificar_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 1  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Trimestre 1
  //Inicio de Calificaciones de 6to, Trimestre 2
  const calificar_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 2  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Trimestre 2
  //Inicio de Calificaciones de 6to, Trimestre 3
  const calificar_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela,escuela.grado,matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.trimestre = 3  AND matricula.id_matricula = ?',[encoid_matricula]);
  //Fin de Calificaciones de 6to, Trimestre 3

  //Inicio de If
  const calificar_4_6B1 = [1];
  const calificar_4_6B2 = [2];
  const calificar_4_6B3 = [3];
  //Fin de If
  //Select que funciona para mostrar el id de matricula y su nombre en el link de calificar alumno
  const porcalificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,porcalificar_cuarto_sexto);
  res.render('newcalificaciones/calificado', {calificar_cuarto_sextoB1,calificar_cuarto_sextoB2,calificar_cuarto_sextoB3,porcalificar_cuarto_sexto:porcalificar_cuarto_sexto[0],calificar_4_6B1,calificar_4_6B2,calificar_4_6B3});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/1/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoT1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoT1);
  res.render('newcalificaciones/calificar', {no_calificadoT1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/1/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoT2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoT2);
  res.render('newcalificaciones/calificar', {no_calificadoT2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/1/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoT3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoT3);
  res.render('newcalificaciones/calificar', {no_calificadoT3});
});


//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 2do Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/2/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoT1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoT1);
  res.render('newcalificaciones/calificar', {no_calificadoT1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 2do Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/2/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoT2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoT2);
  res.render('newcalificaciones/calificar', {no_calificadoT2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 2do Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/2/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificadoT3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificadoT3);
  res.render('newcalificaciones/calificar', {no_calificadoT3});
});

//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 3do Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/3/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado3T1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado3T1);
  res.render('newcalificaciones/calificar', {no_calificado3T1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/3/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado3T2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado3T2);
  res.render('newcalificaciones/calificar', {no_calificado3T2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 1ro Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/3/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado3T3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado3T3);
  res.render('newcalificaciones/calificar', {no_calificado3T3});
});



//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/4/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB1);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/4/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB2);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/4/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB3);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB3});
});



//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 5to Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/5/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB1);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/5/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB2);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/5/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB3);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB3});
});


//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 6to Bimestre 1 y calificar sus materias
router.get('/calificar/:id_matricula/6/1', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB1 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB1);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB1});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 2 y calificar sus materias
router.get('/calificar/:id_matricula/6/2', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB2 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB2);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB2});
});
//Get que se usa para mostrar los datos generales de los alumnos que NO estan calificados 4to Bimestre 3 y calificar sus materias
router.get('/calificar/:id_matricula/6/3', isLoggedIn, async (req, res) => {
  const { id_matricula, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  const no_calificado_cuarto_sextoB3 = await db.query('SELECT escuela.id_escuela, escuela.grado, TO_BASE64(matricula.id_matricula) AS id_matricula,TO_BASE64(matricula.id_escuela) AS id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela Where matricula.id_matricula = ?',[encoid_matricula]);
  //console.log(no_calificado_cuarto_sextoB3);
  res.render('newcalificaciones/calificar', {no_calificado_cuarto_sextoB3});
});


//Post que se usa para calificar un nuevo alumno de 1ro
router.post('/calificar/1/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { trimestre, espanol, matematicas, cono_medio, artes, edu_socioemocional, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    trimestre,
    espanol,
    matematicas,
    cono_medio,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  await db.query('INSERT INTO newprimero_segundo set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/newcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Post que se usa para calificar un nuevo alumno de 2do
router.post('/calificar/2/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { trimestre, espanol, matematicas, cono_medio, artes, edu_socioemocional, edu_fisica, ingles } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    trimestre,
    espanol,
    matematicas,
    cono_medio,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  await db.query('INSERT INTO newprimero_segundo set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/newcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Post que se usa para calificar un nuevo alumno de 3ro
router.post('/calificar/3/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { trimestre, espanol, matematicas, cien_naturales, enti_vivo, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    trimestre,
    espanol,
    matematicas,
    cien_naturales,
    enti_vivo,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  await db.query('INSERT INTO newtercero set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/newcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Insertara calificaciones de 4to grado
router.post('/calificar/4/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { trimestre, espanol, matematicas, cien_naturales, geografia, historia, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    trimestre,
    espanol,
    matematicas,
    cien_naturales,
    geografia,
    historia,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  await db.query('INSERT INTO newcuarto_sexto set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/newcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Insertara calificaciones de 5to grado
router.post('/calificar/5/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { trimestre, espanol, matematicas, cien_naturales, geografia, historia, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    trimestre,
    espanol,
    matematicas,
    cien_naturales,
    geografia,
    historia,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  await db.query('INSERT INTO newcuarto_sexto set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/newcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Insertara calificaciones de 6to grado
router.post('/calificar/6/:id_matricula/:id_escuela/:grado', isLoggedIn, async (req,res) => {
  const { id_matricula, id_escuela, grado } = req.params;
  let encoid_matricula = atob(id_matricula);
  let encoid_escuela = atob(id_escuela);
  const { trimestre, espanol, matematicas, cien_naturales, geografia, historia, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  const newCalificar = {
    id_matricula:encoid_matricula,
    id_escuela:encoid_escuela,
    grado,
    trimestre,
    espanol,
    matematicas,
    cien_naturales,
    geografia,
    historia,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  await db.query('INSERT INTO newcuarto_sexto set ?', [newCalificar]);
  req.flash('success', 'Alumno Calificado(a) correctamente');
  //console.log(newCalificar);
  res.redirect('/newcalificaciones/calificado/' + req.params.id_matricula + '/' + req.params.grado);
});

//Inicio der Pendiente
//Get que muestra a los alumnos y calificaciones de 1ro de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/1', isLoggedIn, async (req, res) => {
  const { id_escuela, grado } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get para mostrar calificaciones de 1ro de primaria Trimestre 1
  const listcalificacionesprimero_terceroT1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica, (newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 1ro de primaria Trimestre 1

  //Inicio de graficas 1ro Trimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,TO_BASE64(newprimero_segundo.id_escuela) AS id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Trimestre 1

  //Inicio de Get para mostrar calificaciones de 1ro de primaria Trimestre 2
  const listcalificacionesprimero_terceroT2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica, (newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 1ro de primaria Trimestre 2

  //Inicio de graficas 1ro Trimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,TO_BASE64(newprimero_segundo.id_escuela) AS id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Trimestre 2

  //Inicio de Get para mostrar calificaciones de 1ro de primaria Trimestre 3
  const listcalificacionesprimero_terceroT3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica, (newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 1ro de primaria Trimestre 3

  //Inicio de graficas 1ro Trimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,TO_BASE64(newprimero_segundo.id_escuela) AS id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 1 AND newprimero_segundo.trimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 1ro Trimestre 3

  //console.log(listcalificacionesprimero_terceroT1,listcalificacionesprimero_terceroT2,listcalificacionesprimero_terceroT3);
  res.render('newcalificaciones/list', {listcalificacionesprimero_terceroT1,listcalificacionesprimero_terceroT2,listcalificacionesprimero_terceroT3,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0]});
});

//Get que muestra a los alumnos y calificaciones de 2do de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/2', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get para mostrar calificaciones de 2do de primaria Trimestre 1
  const listcalificacionesprimero_terceroT1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica, (newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 2do de primaria Trimestre 1

  //Inicio de graficas 2do Trimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,TO_BASE64(newprimero_segundo.id_escuela) AS id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do Trimestre 1

  //Inicio de Get para mostrar calificaciones de 2do de primaria Trimestre 2
  const listcalificacionesprimero_terceroT2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica, (newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 2do de primaria Trimestre 2

  //Inicio de graficas 2do Trimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,TO_BASE64(newprimero_segundo.id_escuela) AS id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do Trimestre 2

  //Inicio de Get para mostrar calificaciones de 2do de primaria Trimestre 3
  const listcalificacionesprimero_terceroT3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,newprimero_segundo.id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica, (newprimero_segundo.espanol+ newprimero_segundo.matematicas+newprimero_segundo.cono_medio+newprimero_segundo.artes+newprimero_segundo.edu_socioemocional+newprimero_segundo.edu_fisica)/6 AS P FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 2do de primaria Trimestre 3

  //Inicio de graficas 2do Trimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newprimero_segundo.idnewprimero_segundo,newprimero_segundo.id_matricula,TO_BASE64(newprimero_segundo.id_escuela) AS id_escuela,newprimero_segundo.grado,newprimero_segundo.trimestre FROM matricula INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula WHERE newprimero_segundo.grado = 2 AND newprimero_segundo.trimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 2do Trimestre 3

  //console.log(listcalificacionesprimero_terceroT1,listcalificacionesprimero_terceroT2,listcalificacionesprimero_terceroT3);
  res.render('newcalificaciones/list', {listcalificacionesprimero_terceroT1,listcalificacionesprimero_terceroT2,listcalificacionesprimero_terceroT3,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0]});
});

//Get que muestra a los alumnos y calificaciones de 3ro de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/3', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get para mostrar calificaciones de 3ro de primaria Trimestre 1
  const listcalificacionesterceroT1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newtercero.idnewtercero) AS idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional, newtercero.edu_fisica, (newtercero.espanol + newtercero.matematicas +newtercero.cien_naturales +newtercero.enti_vivo + newtercero.form_civ_etica +newtercero.artes + newtercero.edu_socioemocional +newtercero.edu_fisica)/8 AS P FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 3ro de primaria Trimestre 1

  //Inicio de graficas 3er Trimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newtercero.idnewtercero,newtercero.id_matricula,TO_BASE64(newtercero.id_escuela) AS id_escuela,newtercero.grado,newtercero.trimestre FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3er Trimestre 1

  //Inicio de Get para mostrar calificaciones de 3ro de primaria Trimestre 2
  const listcalificacionesterceroT2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newtercero.idnewtercero) AS idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional, newtercero.edu_fisica, (newtercero.espanol + newtercero.matematicas +newtercero.cien_naturales +newtercero.enti_vivo + newtercero.form_civ_etica +newtercero.artes + newtercero.edu_socioemocional +newtercero.edu_fisica)/8 AS P FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 3ro de primaria Trimestre 2

  //Inicio de graficas 3er Trimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newtercero.idnewtercero,newtercero.id_matricula,TO_BASE64(newtercero.id_escuela) AS id_escuela,newtercero.grado,newtercero.trimestre FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3er Trimestre 2

  //Inicio de Get para mostrar calificaciones de 3ro de primaria Trimestre 3
  const listcalificacionesterceroT3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newtercero.idnewtercero) AS idnewtercero,newtercero.id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.trimestre,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional, newtercero.edu_fisica, (newtercero.espanol + newtercero.matematicas +newtercero.cien_naturales +newtercero.enti_vivo + newtercero.form_civ_etica +newtercero.artes + newtercero.edu_socioemocional +newtercero.edu_fisica)/8 AS P FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 3ro de primaria Trimestre 3

  //Inicio de graficas 3er Trimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newtercero.idnewtercero,newtercero.id_matricula,TO_BASE64(newtercero.id_escuela) AS id_escuela,newtercero.grado,newtercero.trimestre FROM matricula INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula WHERE newtercero.grado = 3 AND newtercero.trimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 3er Trimestre 3

  //console.log(listcalificacionesterceroT1,listcalificacionesterceroT2,listcalificacionesterceroT3);
  res.render('newcalificaciones/list', {listcalificacionesterceroT1,listcalificacionesterceroT2,listcalificacionesterceroT3,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0]});
});

//Get que muestra a los alumnos y calificaciones de 4to de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/4', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get para mostrar calificaciones de 4to de primaria Trimestre 1
  const listcalificacionescuarto_sextoT1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 4to de primaria Trimestre 1

  //Inicio de graficas 4to Trimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to Trimestre 1

  //Inicio de Get para mostrar calificaciones de 4to de primaria Trimestre 2
  const listcalificacionescuarto_sextoT2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 4to de primaria Trimestre 2

  //Inicio de graficas 4to Trimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to Trimestre 2

  //Inicio de Get para mostrar calificaciones de 4to de primaria Trimestre 3
  const listcalificacionescuarto_sextoT3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 4to de primaria Trimestre 3

  //Inicio de graficas 4to Trimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 4 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 4to Trimestre 3

  //console.log(listcalificacionescuarto_sextoT1,listcalificacionescuarto_sextoT2,listcalificacionescuarto_sextoT3);
  res.render('newcalificaciones/list', {listcalificacionescuarto_sextoT1,listcalificacionescuarto_sextoT2,listcalificacionescuarto_sextoT3,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0]});
});

//Get que muestra a los alumnos y calificaciones de 5to de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/5', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get para mostrar calificaciones de 5to de primaria Trimestre 1
  const listcalificacionescuarto_sextoT1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 5to de primaria Trimestre 1

  //Inicio de graficas 5to Trimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to Trimestre 1

  //Inicio de Get para mostrar calificaciones de 5to de primaria Trimestre 2
  const listcalificacionescuarto_sextoT2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 5to de primaria Trimestre 2

  //Inicio de graficas 5to Trimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to Trimestre 2

  //Inicio de Get para mostrar calificaciones de 5to de primaria Trimestre 3
  const listcalificacionescuarto_sextoT3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 5to de primaria Trimestre 3

  //Inicio de graficas 5to Trimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 5 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 5to Trimestre 3

  //console.log(listcalificacionescuarto_sextoT1,listcalificacionescuarto_sextoT2,listcalificacionescuarto_sextoT3);
  res.render('newcalificaciones/list', {listcalificacionescuarto_sextoT1,listcalificacionescuarto_sextoT2,listcalificacionescuarto_sextoT3,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0]});
});

//Get que muestra a los alumnos y calificaciones de 6to de primaria (lista completa de alumnos cuando estan calificados)
router.get('/:id_escuela/6', isLoggedIn, async (req, res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  //Inicio de Get para mostrar calificaciones de 6to de primaria Trimestre 1
  const listcalificacionescuarto_sextoT1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 6to de primaria Trimestre 1

  //Inicio de graficas 6to Trimestre 1
  const grafica1 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 1 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to Trimestre 1

  //Inicio de Get para mostrar calificaciones de 6to de primaria Trimestre 2
  const listcalificacionescuarto_sextoT2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 6to de primaria Trimestre 2

  //Inicio de graficas 6to Trimestre 2
  const grafica2 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 2 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to Trimestre 2

  //Inicio de Get para mostrar calificaciones de 6to de primaria Trimestre 3
  const listcalificacionescuarto_sextoT3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,newcuarto_sexto.id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica, newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica,(newcuarto_sexto.espanol+newcuarto_sexto.matematicas+newcuarto_sexto.cien_naturales+newcuarto_sexto.geografia+newcuarto_sexto.historia+newcuarto_sexto.form_civ_etica+newcuarto_sexto.artes+newcuarto_sexto.edu_socioemocional+newcuarto_sexto.edu_fisica)/9 AS P FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ? ORDER BY matricula.nombres ASC',[encoid_escuela]);
  //Fin de Get para mostrar calificaciones de 6to de primaria Trimestre 3

  //Inicio de graficas 6to Trimestre 3
  const grafica3 = await db.query('SELECT matricula.id_matricula,matricula.id_escuela,newcuarto_sexto.idnewcuarto_sexto,newcuarto_sexto.id_matricula,TO_BASE64(newcuarto_sexto.id_escuela) AS id_escuela,newcuarto_sexto.grado,newcuarto_sexto.trimestre FROM matricula INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula WHERE newcuarto_sexto.grado = 6 AND newcuarto_sexto.trimestre = 3 AND matricula.id_escuela = ?',[encoid_escuela]);
  //Fin de graficas 6to Trimestre 3

  //console.log(listcalificacionescuarto_sextoT1,listcalificacionescuarto_sextoT2,listcalificacionescuarto_sextoT3);
  res.render('newcalificaciones/list', {listcalificacionescuarto_sextoT1,listcalificacionescuarto_sextoT2,listcalificacionescuarto_sextoT3,grafica1:grafica1[0],grafica2:grafica2[0],grafica3:grafica3[0]});
});
//Fin de Pendiente

//-------------------------------------EDICION--------------------------------------------
//Inicio de actualizar calificaciones de 1ro
router.get('/edit/1/:idnewprimero_segundo', isLoggedIn, async (req,res) => {
  const { idnewprimero_segundo, grado } = req.params;
  let encoid_newprimero_segundo = atob(idnewprimero_segundo);
  const edit_calificar_primero_segundo = await db.query('SELECT escuela.id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,TO_BASE64(newprimero_segundo.id_matricula) AS id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.idnewprimero_segundo = ?',[encoid_newprimero_segundo]);

  //console.log(edit_calificar_primero_segundo);
  res.render('newcalificaciones/edit', {edit_calificar_primero_segundo});
});

router.post('/edit/1/:idnewprimero_segundo', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, idnewprimero_segundo,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, artes, edu_socioemocional, edu_fisica } = req.body;
  let encoid_newprimero_segundo = atob(idnewprimero_segundo);
  const editCalif1_2 = {
    espanol,
    matematicas,
    cono_medio,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  //console.log(newEscuela);
  await db.query('UPDATE newprimero_segundo set ? WHERE idnewprimero_segundo = ?', [editCalif1_2, encoid_newprimero_segundo]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/newcalificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 1ro

//Inicio de actualizar calificaciones de 2do
router.get('/edit/2/:idnewprimero_segundo', isLoggedIn, async (req,res) => {
  const { idnewprimero_segundo, grado } = req.params;
  let encoid_newprimero_segundo = atob(idnewprimero_segundo);
  const edit_calificar_primero_segundo = await db.query('SELECT escuela.id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newprimero_segundo.idnewprimero_segundo) AS idnewprimero_segundo,TO_BASE64(newprimero_segundo.id_matricula) AS id_matricula,newprimero_segundo.id_escuela,newprimero_segundo.grado,newprimero_segundo.espanol,newprimero_segundo.matematicas,newprimero_segundo.cono_medio,newprimero_segundo.artes,newprimero_segundo.edu_socioemocional,newprimero_segundo.edu_fisica FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newprimero_segundo ON matricula.id_matricula = newprimero_segundo.id_matricula Where newprimero_segundo.idnewprimero_segundo = ?',[encoid_newprimero_segundo]);

  //console.log(edit_calificar_primero_segundo);
  res.render('newcalificaciones/edit', {edit_calificar_primero_segundo});
});

router.post('/edit/2/:idnewprimero_segundo', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, idnewprimero_segundo,id_matricula } = req.body;
  const { espanol, matematicas, cono_medio, artes, edu_socioemocional, edu_fisica } = req.body;
  let encoid_newprimero_segundo = atob(idnewprimero_segundo);
  const editCalif1_2 = {
    espanol,
    matematicas,
    cono_medio,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  //console.log(newEscuela);
  await db.query('UPDATE newprimero_segundo set ? WHERE idnewprimero_segundo = ?', [editCalif1_2, encoid_newprimero_segundo]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/newcalificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 2do

//Inicio de actualizar calificaciones de 3ro
router.get('/edit/3/:idnewtercero', isLoggedIn, async (req,res) => {
  const { idnewtercero, grado } = req.params;
  let encoid_newtercero = atob(idnewtercero);
  const edit_calificar_tercero = await db.query('SELECT escuela.id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newtercero.idnewtercero) AS idnewtercero,TO_BASE64(newtercero.id_matricula) AS id_matricula,newtercero.id_escuela,newtercero.grado,newtercero.espanol,newtercero.matematicas,newtercero.cien_naturales,newtercero.enti_vivo,newtercero.form_civ_etica,newtercero.artes,newtercero.edu_socioemocional,newtercero.edu_fisica FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newtercero ON matricula.id_matricula = newtercero.id_matricula Where newtercero.idnewtercero = ?',[encoid_newtercero]);

  //console.log(edit_calificar_tercero);
  res.render('newcalificaciones/edit', {edit_calificar_tercero});
});

router.post('/edit/3/:idnewtercero', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, idnewtercero,id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, enti_vivo, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  let encoid_newtercero= atob(idnewtercero);
  const editCalif3 = {
    espanol,
    matematicas,
    cien_naturales,
    enti_vivo,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  //console.log(newEscuela);
  await db.query('UPDATE newtercero set ? WHERE idnewtercero = ?', [editCalif3, encoid_newtercero]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
  res.redirect('/newcalificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 3ro

//Inicio de actualizar calificaciones de 4to
router.get('/edit/4/:idnewcuarto_sexto', isLoggedIn, async (req,res) => {
  const { idnewcuarto_sexto, grado } = req.params;
  let encoid_newcuarto_sexto = atob(idnewcuarto_sexto);
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,TO_BASE64(newcuarto_sexto.id_matricula) AS id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.idnewcuarto_sexto = ?',[encoid_newcuarto_sexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('newcalificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/4/:idnewcuarto_sexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, idnewcuarto_sexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, geografia, historia, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  let encoid_newcuarto_sexto= atob(idnewcuarto_sexto);
  const editCalif4_6 = {
    espanol,
    matematicas,
    cien_naturales,
    geografia,
    historia,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  //console.log(newEscuela);
  await db.query('UPDATE newcuarto_sexto set ? WHERE idnewcuarto_sexto = ?', [editCalif4_6, encoid_newcuarto_sexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/newcalificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 4to

//Inicio de actualizar calificaciones de 5to
router.get('/edit/5/:idnewcuarto_sexto', isLoggedIn, async (req,res) => {
  const { idnewcuarto_sexto, grado } = req.params;
  let encoid_newcuarto_sexto = atob(idnewcuarto_sexto);
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,TO_BASE64(newcuarto_sexto.id_matricula) AS id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.idnewcuarto_sexto = ?',[encoid_newcuarto_sexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('newcalificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/5/:idnewcuarto_sexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, idnewcuarto_sexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, geografia, historia, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  let encoid_newcuarto_sexto= atob(idnewcuarto_sexto);
  const editCalif4_6 = {
    espanol,
    matematicas,
    cien_naturales,
    geografia,
    historia,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  //console.log(newEscuela);
  await db.query('UPDATE newcuarto_sexto set ? WHERE idnewcuarto_sexto = ?', [editCalif4_6, encoid_newcuarto_sexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/newcalificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 5to

//Inicio de actualizar calificaciones de 6to
router.get('/edit/6/:idnewcuarto_sexto', isLoggedIn, async (req,res) => {
  const { idnewcuarto_sexto, grado } = req.params;
  let encoid_newcuarto_sexto = atob(idnewcuarto_sexto);
  const edit_calificar_cuarto_sexto = await db.query('SELECT escuela.id_escuela,escuela.grado,TO_BASE64(matricula.id_matricula) AS id_matricula,matricula.id_escuela,matricula.apellido_paterno,matricula.apellido_materno,matricula.nombres,TO_BASE64(newcuarto_sexto.idnewcuarto_sexto) AS idnewcuarto_sexto,TO_BASE64(newcuarto_sexto.id_matricula) AS id_matricula,newcuarto_sexto.id_escuela,newcuarto_sexto.grado,newcuarto_sexto.espanol,newcuarto_sexto.matematicas,newcuarto_sexto.cien_naturales,newcuarto_sexto.geografia,newcuarto_sexto.historia,newcuarto_sexto.form_civ_etica,newcuarto_sexto.artes,newcuarto_sexto.edu_socioemocional,newcuarto_sexto.edu_fisica FROM escuela INNER JOIN matricula ON escuela.id_escuela = matricula.id_escuela INNER JOIN newcuarto_sexto ON matricula.id_matricula = newcuarto_sexto.id_matricula Where newcuarto_sexto.idnewcuarto_sexto = ?',[encoid_newcuarto_sexto]);

  //console.log(edit_calificar_cuarto_sexto);
  res.render('newcalificaciones/edit', {edit_calificar_cuarto_sexto});
});

router.post('/edit/6/:idnewcuarto_sexto', isLoggedIn, async (req,res) => {
  //const { id_matricula } = req.params;
  const { id_escuela, grado, idnewcuarto_sexto, id_matricula } = req.body;
  const { espanol, matematicas, cien_naturales, geografia, historia, form_civ_etica, artes, edu_socioemocional, edu_fisica } = req.body;
  let encoid_newcuarto_sexto= atob(idnewcuarto_sexto);
  const editCalif4_6 = {
    espanol,
    matematicas,
    cien_naturales,
    geografia,
    historia,
    form_civ_etica,
    artes,
    edu_socioemocional,
    edu_fisica
  };
  //console.log(newEscuela);
  await db.query('UPDATE newcuarto_sexto set ? WHERE idnewcuarto_sexto = ?', [editCalif4_6, encoid_newcuarto_sexto]);
  req.flash('success', 'Alumn@ Actualizad@ Correctamente');
    res.redirect('/newcalificaciones/calificado/' + req.body.id_matricula + '/' + req.body.grado);
});
//Fin de actualizar calificaciones de 6to


module.exports = router;
