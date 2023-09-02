var express = require('express');
var router = express.Router();
var prediccionesModel = require('../../models/prediccionesModel');



router.get('/', async function(req, res, next) {
  var predicciones = await prediccionesModel.getPredicciones();

  res.render('admin/predicciones',{
    layout: 'admin/layout',
    user: req.session.user,
    predicciones
  });
});

router.get('/agregar', async (req, res, next) =>{
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
  });

  router.post('/agregar', async (req, res, next) =>{
   try {
    if (req.body.user != "" && req.body.body !=""){
      await prediccionesModel.insertPredicciones(req.body);
      res.redirect('/admin/predicciones')
    } else {
      res.render('admin/agregar',{
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
   } catch (error){
    console.log(error)
    res.render('admin/agregar',{
      layout: 'admin/layout',
      error: true, message: "No se cargo la prediccion"
    });
   }
  
    });

router.get('/eliminar/:id', async (req, res, next) =>{
var id =req.params.id;
await prediccionesModel.deletePrediccionesById(id);
res.redirect('/admin/predicciones')
});

router.get('/modificar/:id', async (req, res, next) =>{
 let id = req.params.id;
 let prediccion = await prediccionesModel.getPrediccionById(id);
 res.render('admin/modificar', {
  layout: 'admin/layout',
  prediccion
 });
  });

  router.post('/modificar', async (req, res, next) =>{
    try {
      let obj = {
        user : req.body.user,
        body : req.body.body
      }
      await prediccionesModel.modificarPrediccionById(obj, req.body.id);
      res.redirect('/admin/predicciones');
    }
    catch (error) {
      console.log(error)
      res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true, message: 'No se modifico la prediccion'
      })
    }
  })

module.exports = router;