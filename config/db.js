const mongoose = require('mongoose');

const initDB = async () => {
    try {
        const DB_URI = `mongodb+srv://utti232030:RECK021023HOCYNVA5@cluster0.otf88f8.mongodb.net/BioConnet?retryWrites=true&w=majority`;
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        throw error;  // Lanza el error para que sea manejado por el bloque `catch` en el servidor
    }
};

module.exports = initDB;

