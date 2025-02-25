const User = require('../models/user')



exports.getData = async (req, res) => {
    try {
        const docs = await User.find();
        res.json({ docs });
    } catch (err) {
        res.status(500).json({ error: "Error al obtener los datos", details: err.message });
    }
};

exports.insertData = async (req, res) => {
    try {
        const data = new User(req.body);
        const savedData = await data.save();
        res.status(201).json({ message: "Usuario guardado correctamente", savedData });
    } catch (err) {
        res.status(500).json({ error: "Error al insertar los datos", details: err.message });
    }
};


exports.updateSingle = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const result = await User.updateOne({ _id: id }, body);

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "No se encontró el usuario o no hubo cambios" });
        }

        res.json({ message: "Usuario actualizado correctamente", result });
    } catch (err) {
        res.status(500).json({ error: "Error al actualizar", details: err.message });
    }
};


exports.deleteSingle = async (req, res) => {
    try {
        const { id } = req.params; 

       
        const result = await User.deleteOne({ _id: id });

        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

       
        res.json({ message: "Usuario eliminado correctamente" });
    } catch (err) {
        
        res.status(500).json({ error: "Error al eliminar", details: err.message });
    }
};


exports.getSingle = async (req, res) => {
    try {
        const { id } = req.params;  

        
        const user = await User.findById(id);

        
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        
        res.json({ user });
    } catch (err) {
        
        res.status(500).json({ error: "Error al obtener el usuario", details: err.message });
    }
};





