const Favorito = require("../models/favoritos");
const Usuario = require("../models/user");
const Producto = require("../models/productos");

exports.agregarProveedorFavorito = async (req, res) => {
    try {
        const { usuario_id, proveedor_id } = req.body;

        // Verificar si el usuario a agregar es proveedor
        const proveedor = await Usuario.findById(proveedor_id);
        if (!proveedor || !proveedor.es_proveedor) {
            return res.status(400).json({ mensaje: "El usuario no es un proveedor" });
        }

        // Agregar proveedor a favoritos si no está agregado aún
        const favorito = await Favorito.findOneAndUpdate(
            { usuario_id },
            { $addToSet: { proveedores: proveedor_id } }, // Evita duplicados
            { upsert: true, new: true }
        );

        res.status(200).json({ mensaje: "Proveedor agregado a favoritos", favorito });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al agregar proveedor a favoritos", error });
    }
};

exports.agregarProductoFavorito = async (req, res) => {
    try {
        const { usuario_id, producto_id } = req.body;

        // Verificar si el producto existe
        const producto = await Producto.findById(producto_id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        // Agregar producto a favoritos si no está agregado aún
        const favorito = await Favorito.findOneAndUpdate(
            { usuario_id },
            { $addToSet: { productos: producto_id } }, // Evita duplicados
            { upsert: true, new: true }
        );

        res.status(200).json({ mensaje: "Producto agregado a favoritos", favorito });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al agregar producto a favoritos", error });
    }
};

exports.obtenerFavoritos = async (req, res) => {
    try {
        const { usuario_id } = req.params;

        const favoritos = await Favorito.findOne({ usuario_id })
            .populate("proveedores", "nombre correo telefono img_perf") // Trae info de proveedores
            .populate("productos", "nombre descripcion precio img_prod"); // Trae info de productos

        if (!favoritos) {
            return res.status(404).json({ mensaje: "No tienes favoritos guardados" });
        }

        res.status(200).json(favoritos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener favoritos", error });
    }
};

exports.eliminarProveedorFavorito = async (req, res) => {
    try {
        const { usuario_id, proveedor_id } = req.body;

        const favorito = await Favorito.findOneAndUpdate(
            { usuario_id },
            { $pull: { proveedores: proveedor_id } }, // Elimina solo el proveedor indicado
            { new: true }
        );

        res.status(200).json({ mensaje: "Proveedor eliminado de favoritos", favorito });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar proveedor de favoritos", error });
    }
};

exports.eliminarProductoFavorito = async (req, res) => {
    try {
        const { usuario_id, producto_id } = req.body;

        const favorito = await Favorito.findOneAndUpdate(
            { usuario_id },
            { $pull: { productos: producto_id } }, // Elimina solo el producto indicado
            { new: true }
        );

        res.status(200).json({ mensaje: "Producto eliminado de favoritos", favorito });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar producto de favoritos", error });
    }
};