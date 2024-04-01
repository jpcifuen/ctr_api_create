const fiscaliasService = require('../services/fiscaliasService');

async function addFiscalia(req, res) {
    const { Nombre, Ubicacion } = req.body;
    try {
        await fiscaliasService.addFiscalia(Nombre, Ubicacion);
        res.status(201).send('Fiscalía agregada correctamente');
    } catch (error) {
        console.error('Error al agregar la fiscalía:', error);
        res.status(500).json({ error: 'Error al agregar la fiscalía' });
    }
}

module.exports = {
    addFiscalia
};
