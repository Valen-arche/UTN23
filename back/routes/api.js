var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer'); // Import nodemailer module

var prediccionesModel =require('./../models/prediccionesModel');

router.get('/predicciones', async function (req,res,next){
    let predicciones = await prediccionesModel.getPredicciones();
    res.json(predicciones)
});

router.post('/contacto', async (req, res)=>{
    const mail = {
        to: 'valentinborobio112@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} ${req.body.apellido} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email}`
}
const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
        user: process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
    }
});
await transport.sendMail(mail)

res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
});
});

module.exports = router;