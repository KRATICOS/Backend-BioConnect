const express = require('express');
const initDB = require('./config/db');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Rutas
const uploadRoutes = require('./app/routes/upload');
const userRouters = require('./app/routes/user');
const itemsRouters = require('./app/routes/items');
const ProductosRouters = require('./app/routes/productos');
const FavoritosRouters = require('./app/routes/favoritos');
const CategoriasRouters = require('./app/routes/categorias');

// Middleware para analizar datos
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

// Rutas
app.use('/upload', uploadRoutes);
app.use('/users', userRouters);
app.use('/items', itemsRouters);
app.use('/productos', ProductosRouters);
app.use('/favoritos', FavoritosRouters);
app.use('/categorias', CategoriasRouters);

// Conexión a la base de datos y luego iniciar el servidor
initDB().then(() => {
    app.listen(port, () => {
        console.log(`La aplicación está en línea en el puerto ${port}!`);
    });
}).catch(err => {
    console.error("Error al conectar con la base de datos:", err);
    process.exit(1);  // Terminar el proceso si la conexión falla
});
