const fiscaliasRepository = require('../repositories/fiscaliasRepository');

async function getAllFiscalias() {
    return await fiscaliasRepository.getAllFiscalias();
}

async function addFiscalia(Nombre, Ubicacion) {
    await fiscaliasRepository.addFiscalia(Nombre, Ubicacion);
}

async function deleteFiscalia(id) {
    await fiscaliasRepository.deleteFiscalia(id);
}

module.exports = {
    getAllFiscalias,
    addFiscalia,
    deleteFiscalia
};
