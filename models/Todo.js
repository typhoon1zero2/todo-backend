/*************************************
 * Todo Schema
 ************************************/
const { Schema, model } = require('./connection')

const toDoListData = Schema({
    entry: {
        required: true,
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'TO-DO',
        enum: ['TO-DO', 'PENDING', 'COMPLETED'],
    }
},
{
    timestamps: true
}

)

  module.exports = model('Todo', toDoListData);