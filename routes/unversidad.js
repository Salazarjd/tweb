const { Router } = require('express');
const { createUniversidad, getUniversidades, getUniversidad, updateUniversidad } = require('../controllers/universidad');

const router = Router()

router.post('/', createUniversidad);

router.get('/', getUniversidades);

router.get('/:id', getUniversidad);

router.put('/:id', updateUniversidad);

module.exports = router;