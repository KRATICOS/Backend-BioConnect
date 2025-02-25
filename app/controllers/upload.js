const multer = require('multer');

// Configura el almacenamiento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');  // La carpeta 'uploads' debe existir en el directorio raíz
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now());
    }
});

// Configura multer con el almacenamiento
const upload = multer({ storage: storage });

// Middleware para manejar el archivo
exports.upload = upload.single('myFile');  // Asegúrate de que 'myFile' sea el nombre correcto

// Controlador para manejar la respuesta después de la carga del archivo
exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    res.json({
        message: 'File uploaded successfully',
        file: req.file
    });
};
