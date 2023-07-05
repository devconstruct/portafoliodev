const express = require('express');
const router = express.Router();

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//Get que se usa para mostrar los alumnos que si estan calificados 1ro
router.get('/', isLoggedIn, async (req, res) => {

  res.render('curricular/mapacurricular');
});

router.get('/*', function(req, res) {
    //app.use(function(req, res) {
        res.redirect('/notfound')
    });

module.exports = router;
