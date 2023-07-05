const express = require('express');
const router = express.Router();
const atob = require('atob');

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
  res.render('escuela/add');
});

router.post('/add', isLoggedIn, async (req,res) => {
  const { nom_escuela, grado, grupo } = req.body;
  const newEscuela = {
    nom_escuela,
    grado,
    grupo,
    id_user: req.user.id
  };
  await db.query('INSERT INTO escuela set ?', [newEscuela]);
  req.flash('success', 'Escuela Agregada Correctamente');
  res.redirect('/curricular');
});

router.get('/2018-2019', isLoggedIn, async (req, res) => {
  const escuela = await db.query('SELECT TO_BASE64(id_escuela) AS id_escuela,escuela.id_escuela AS id_esc,id_user,nom_escuela,grado,grupo FROM escuela Where id_user = ?', [req.user.id]);
  //console.log(escuela);
  res.render('escuela/list', {escuela});
});

router.get('/2019', isLoggedIn, async (req, res) => {
  const newescuela = await db.query('SELECT TO_BASE64(id_escuela) AS id_escuela,escuela.id_escuela AS id_esc,id_user,nom_escuela,grado,grupo FROM escuela Where id_user = ?', [req.user.id]);
  //console.log(newescuela);
  res.render('escuela/newlist', {newescuela});
});

router.get('/all', isLoggedIn, async (req, res) => {
  const allescuela = await db.query('SELECT TO_BASE64(id_escuela) AS id_escuela,escuela.id_escuela AS id_esc,id_user,nom_escuela,grado,grupo FROM escuela Where id_user = ?', [req.user.id]);
  //console.log(allescuela);
  res.render('escuela/allist', {allescuela});
});

router.get('/delete/:id_esc', isLoggedIn, async (req,res) => {
  const { id_esc } = req.params;
  await db.query('DELETE FROM escuela WHERE id_escuela = ?', [id_esc]);
  req.flash('success', 'Escuela Eliminada Correctamente');
  res.redirect('/curricular');
});

router.get('/edit/:id_escuela', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  const escuela = await db.query('SELECT TO_BASE64(id_escuela) AS id_escuela,nom_escuela,grado,grupo FROM escuela WHERE id_escuela = ?', [encoid_escuela]);
  //console.log(escuela[0]);
  res.render('escuela/edit', {escuela: escuela[0]});
});

router.post('/edit/:id_escuela', isLoggedIn, async (req,res) => {
  const { id_escuela } = req.params;
  let encoid_escuela = atob(id_escuela);
  const { nom_escuela, grado, grupo } = req.body;
  const newEscuela = {
    nom_escuela,
    grado,
    grupo
  };
  //console.log(newEscuela);
  await db.query('UPDATE escuela set ? WHERE id_escuela = ?', [newEscuela, encoid_escuela]);
  req.flash('success', 'Escuela Actualizada Correctamente');
  res.redirect('/curricular');
});

router.get('/*', function(req, res) {
    //app.use(function(req, res) {
        res.redirect('/notfound')
    });

module.exports = router;
