const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const FavoritoScheme = new mongoose.Schema(
    {
        usuario_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            required: true
        },
        proveedores: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario"
        }],
        productos: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Producto"
        }]
    }, { timestamps: true }
);


FavoritoScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('Favoritos', FavoritoScheme)