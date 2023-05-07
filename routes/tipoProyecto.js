const { Router } = require('express')
const {createTipoProyecto} =
 require('../controllers/tipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
// router.get('/', getTipoEquipos)

// consultar todos
// router.put('/:id', updateTipoEquipoByID)

module.exports = router;