const fiscaliasService = require('../services/fiscaliasService');

async function getFiscalias(req, res) {
    try {
        const fiscalias = await fiscaliasService.getAllFiscalias();
        res.json(fiscalias);
    } catch (error) {
        console.error('Error al obtener las fiscalías:', error);
        res.status(500).json({ error: 'Error al obtener las fiscalías' });
    }
}

module.exports = {
    getFiscalias
};
