const Categorias = require('../models/categorias');

exports.getData = async (req, res) => {
    try {
        const categorias = await Categorias.find();
        res.json({ categorias });
    } catch (err) {
        res.status(500).json({ error: "Error al obtener las categorías", details: err.message });
    }
};

exports.getSingle = async (req, res) => {
    try {
        const { id } = req.params;

        const categoria = await Categorias.findById(id);

        if (!categoria) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.json({ categoria });
    } catch (err) {
        res.status(500).json({ error: "Error al obtener la categoría", details: err.message });
    }
};
