var express = require('express');
var router = express.Router();
var usuariosModel= require ('./../../models/usuariosModel')


router.get('/', function(req, res, next) {
  res.render('admin/login',{
    layout: 'admin/layout',

  });
});

router.post('/', async (req, res, next) => {
  try{
    var user = req.body.user;
    var password =req.body.password;
    var data=await usuariosModel.getUserByUsernameAndPassword(user, password);
    if (data !=undefined){
      req.session.id_user = data.id;
      req.session.user = data.user;
      res.redirect('/admin/predicciones');
    }else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  }
  catch (error) {
    console.log (error);
  }
});

router.get('/logout', function (req ,res , next )
{
  req.session.destroy();
  res.render ('admin/login',{
    layout: 'admin/layout'
  });
});



module.exports = router;
