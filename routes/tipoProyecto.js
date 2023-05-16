const { Router } = require('express')
const {createTipoProyecto, getTipoProyectos, updateTipoProyectos, getTipoProyecto} =
 require('../controllers/tipoProyecto')

const router = Router()

router.post('/', createTipoProyecto);

router.get('/', getTipoProyectos);

router.get('/:id', getTipoProyecto);

router.put('/:id', updateTipoProyectos);

module.exports = router;