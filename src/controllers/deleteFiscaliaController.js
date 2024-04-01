const fiscaliasService = require('../services/fiscaliasService');

async function deleteFiscalia(req, res) {
    const { id } = req.params;
    try {
        await fiscaliasService.deleteFiscalia(id);
        res.send('Fiscalía eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar la fiscalía:', error);
        res.status(500).json({ error: 'Error al eliminar la fiscalía' });
    }
}

module.exports = {
    deleteFiscalia
};
