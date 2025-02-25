const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const CategoriaScheme = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    }
)

CategoriaScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('Categorias', CategoriaScheme)