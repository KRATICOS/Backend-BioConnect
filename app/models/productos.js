const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const ProductosScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        img_Prod: [{
            type: String
        }],
        usuario_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            required: true
        },
        categoria_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Categoria",
            required: true
        },
        tel: {
            type: Number
        },
        url_paginaf: {
            type: String
        },
        direccion: {
            type: String
        },
        fecha: {
            type: Date,
            default: Date.Now
        }
    }
)



ProductosScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('Productos', ProductosScheme)