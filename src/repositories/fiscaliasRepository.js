const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');

async function getAllFiscalias() {
    const pool = await mysql.createPool(dbConfig);
    const [rows] = await pool.query('SELECT * FROM FISCALIA');
    return rows;
}

async function addFiscalia(Nombre, Ubicacion) {
    const pool = await mysql.createPool(dbConfig);
    await pool.query('INSERT INTO FISCALIA (Nombre, Ubicacion, FechaCreacion) VALUES (?, ?, NOW())', [Nombre, Ubicacion]);
}

async function deleteFiscalia(id) {
    const pool = await mysql.createPool(dbConfig);
    await pool.query('DELETE FROM FISCALIA WHERE Id = ?', [id]);
}

module.exports = {
    getAllFiscalias,
    addFiscalia,
    deleteFiscalia
};
