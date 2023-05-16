const { Router } = require('express');
const { createEtapa, getEtapas, getEtapa, updateEtapa } = require('../controllers/etapa');

const router = Router()

router.post('/', createEtapa);

router.get('/', getEtapas);

router.get('/:id', getEtapa);

router.put('/:id', updateEtapa);

module.exports = router;