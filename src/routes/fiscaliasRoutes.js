const express = require('express');
const router = express.Router();
const getFiscaliasController = require('../controllers/getFiscaliasController');
const addFiscaliaController = require('../controllers/addFiscaliaController');
const deleteFiscaliaController = require('../controllers/deleteFiscaliaController');

router.get('/', getFiscaliasController.getFiscalias);
router.post('/', addFiscaliaController.addFiscalia);
router.delete('/:id', deleteFiscaliaController.deleteFiscalia);

module.exports = router;
