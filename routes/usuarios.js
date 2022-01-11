const {Router} = require('express');
const { usuariosGet,usuariosPut,usuariosPost,usuariosDelete} = require('../controllers/usuarios');

const router = Router();

//tenemos este endpoint /api la cual nos res un hellow world
router.get('/', usuariosGet );

router.put('/:id', usuariosPut );
  
router.post('/', usuariosPost);
  
router.delete('/',usuariosDelete);







module.exports = router;