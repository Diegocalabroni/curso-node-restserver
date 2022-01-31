const { Router } = require('express');

const {  putUsuarios,
         getUsuarios,
         postUsuarios, 
         patchUsuarios, 
         deleteUsuarios} = require('../controllers/user');

const router = Router();

router.get('/', getUsuarios )

router.put('/:id', putUsuarios ); 

router.post('/', postUsuarios);

router.delete('/', deleteUsuarios );

router.patch('/', patchUsuarios );





module.exports = router;