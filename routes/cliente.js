const { Router } = require('express');
const { createCliente, getClientes, getCliente, updateCliente } = require('../controllers/cliente');

const router = Router()

router.post('/', createCliente);

router.get('/', getClientes);

router.get('/:id', getCliente);

router.put('/:id', updateCliente);

module.exports = router;