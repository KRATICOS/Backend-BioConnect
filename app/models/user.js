const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        tel: {
            type: Number,
            required: true,
        },
        img_perf: {
            type: String
        },
        password: {
            type: String,
            requerid: true
        },
        es_proveedor: {
            type: Boolean,
            default: false
        },
        descripcion: {
            type: String
        },
        img_negocio: {
            type: String
        },
        productos: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Producto"
        }]
    }
)



UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('User', UserScheme)