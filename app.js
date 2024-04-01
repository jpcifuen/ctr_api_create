const express = require('express');
const cors = require('cors');
const app = express();
const fiscaliasRoutes = require('./src/routes/fiscaliasRoutes');


app.use(express.json());
app.use(cors());
app.use('/fiscalias', fiscaliasRoutes);

app.use((req, res, next) => {
    req.fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    next();
});

app.use((req, res, next) => {
    console.log(`URL solicitada: ${req.fullUrl}`);
    next();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor API CRUD escuchando en el puerto ${PORT}`);
});
