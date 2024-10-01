var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');

/* GET home page. revisar el codigo de arriba */ 

router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();
  
  res.render('index', {
    novedades
  });
});


module.exports = router;

//en caso de correciones revisar el codigo de arriba

/*router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.mensaje; 

  console.log(req.body)

  var obj = {
    to: 'flavia.ursino@gmail.com',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + " se contactó a través de la web y quiere más información a este correo: " + email + 
          "<br> Además, hizo el siguiente comentario: " + mensaje + 
          ".<br> Su teléfono es " + telefono
  };

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    var info = await transporter.sendMail(obj); 

    res.render('index', {
      message: 'Mensaje enviado con éxito'
    });
  } catch (error) {
    next(error);
  }
});

*/

