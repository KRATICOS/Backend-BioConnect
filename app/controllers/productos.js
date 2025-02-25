const Productos = require('../models/productos')



exports.getData = async (req, res) => {
    try {
        const docs = await Productos.find();
        res.json({ docs });
    } catch (err) {
        res.status(500).json({ error: "Error al obtener los datos", details: err.message });
    }
};


exports.insertData = async (req, res) => {
    try {
        const data = new Productos(req.body);
        const savedData = await data.save();
        res.status(201).json({ message: "Producto guardado correctamente", savedData });
    } catch (err) {
        res.status(500).json({ error: "Error al insertar los datos", details: err.message });
    }
};


exports.updateSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const result = await Productos.updateOne({ _id: id }, body);

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "No se encontró el producto o no hubo cambios" });
        }

        res.json({ message: "Producto actualizado correctamente", result });
    } catch (err) {
        res.status(500).json({ error: "Error al actualizar", details: err.message });
    }
};


exports.deleteSingle = async (req, res) => {
    try {
        const { id } = req.params; 

       
        const result = await Productos.deleteOne({ _id: id });

        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

       
        res.json({ message: "Producto eliminado correctamente" });
    } catch (err) {
        
        res.status(500).json({ error: "Error al eliminar", details: err.message });
    }
};


exports.getSingle = async (req, res) => {
    try {
        const { id } = req.params;  

        
        const producto = await Productos.findById(id);

        
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        
        res.json({ producto });
    } catch (err) {
        
        res.status(500).json({ error: "Error al obtener el producto", details: err.message });
    }
};

