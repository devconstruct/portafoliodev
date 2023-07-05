const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path  = require('path');

const db = require('../database');
const { isLoggedIn } = require('../lib/auth');

//Inicio para subir archivos Material Didactico
let storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'materialdidactico/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });

//Fin para subir archivos Material Didactico

router.get('/', async (req, res) => {

  const totalresultado = 10;

  const matdidactico = await db.query('SELECT * FROM material_didactico ORDER BY id_matdidactico DESC LIMIT ?',[totalresultado]);

  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM material_didactico');

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM material_didactico');

  //console.log(matdidactico);
  res.render('didactico/list', {matdidactico,totalpag:totalpag[0],questionlast:questionlast[0]});
});

router.get('/:pagina', async (req, res) => {
  const { pagina } = req.params;

  const totalresultado = 10;
  const offset = (req.params.pagina-1) * totalresultado ;

  const matdidactico = await db.query('SELECT * FROM material_didactico ORDER BY id_matdidactico DESC LIMIT ? offset ?',[totalresultado,offset]);

  const totalpag = await db.query('SELECT ceil(COUNT(*)/10) AS pagina FROM material_didactico');

  const questionlast = await db.query('SELECT ceil(COUNT(*)/10) as last FROM material_didactico');

  //console.log(matdidactico);
  res.render('didactico/list', {matdidactico,totalpag:totalpag[0],questionlast:questionlast[0]});
});

router.get('/descargar/:file', async (req, res) => {
  const file = 'materialdidactico/'+ req.params.file;
  res.download(file);
});

router.get('/', async (req, res) => {
  const matdidactico = await db.query('SELECT * FROM material_didactico');
  //console.log(matdidactico);
  res.render('didactico/list', {matdidactico});
});

router.get('/busqueda/:searkey', async (req, res) => {
  const { searkey } = req.params;

  const matdidactico = await db.query('SELECT * FROM material_didactico WHERE titulo LIKE ?', ['%' + searkey + '%']);

  res.render('didactico/busqueda', {matdidactico});
});

router.post('/busqueda', async (req, res)=> {
  const { searkey } = req.body;

  res.redirect('/didactico/busqueda/'+ req.body.searkey);
});

router.post('/fileMDidactico/:id_usuario', upload.single('file'), isLoggedIn, async (req, res)=> {
  const { id_usuario } = req.params;
  const { titulo, empresa, precio, tipo_archivo, file, descripcion } = req.body;
  //console.log(`new upload = ${req.file.filename}\n`);
  //  console.log(req.file);
  //  res.json({ msg: 'Upload Works' });
  const material = {
    id_usuario,
    titulo,
    empresa,
    precio,
    tipo_archivo,
    file : req.file.filename,
    descripcion
  };
  //console.log(file);
  await db.query('INSERT INTO material_didactico set ?', [material]);
  req.flash('success', 'Material Didactico Publicado Correctamente');
  res.redirect('/didactico');
});

router.post('/sinfileMDidactico/:id_usuario', upload.single('file'), isLoggedIn, async (req, res)=> {
  const { id_usuario } = req.params;
  const { titulo, empresa, precio, tipo_archivo, descripcion } = req.body;
  const material = {
    id_usuario,
    titulo,
    empresa,
    precio,
    tipo_archivo,
    file : 'Sin_Archivo.png',
    descripcion
  };

  await db.query('INSERT INTO material_didactico set ?', [material]);
  req.flash('success', 'Material Didactico Publicado Correctamente');
  res.redirect('/didactico');
});

router.post('/gusta/:id_matdidactico/:likegusta', isLoggedIn, async (req, res)=> {
  const { id_matdidactico, likegusta } = req.params;
  var gusta = (likegusta * 1)+1;

  const megusta = {
    gusta
  };

  await db.query('UPDATE material_didactico set ? WHERE id_matdidactico = ?', [megusta, id_matdidactico]);
  req.flash('success', 'Material Didactico Publicado Correctamente');
  res.redirect('/didactico');
});

router.post('/nogusta/:id_matdidactico/:dislikegusta', isLoggedIn, async (req, res)=> {
  const { id_matdidactico, dislikegusta } = req.params;
  var disgusta = (dislikegusta * 1)+1;

  const ngusta = {
    disgusta
  };

  await db.query('UPDATE material_didactico set ? WHERE id_matdidactico = ?', [ngusta, id_matdidactico]);
  req.flash('success', 'Material Didactico Publicado Correctamente');
  res.redirect('/didactico');
});


module.exports = router;
