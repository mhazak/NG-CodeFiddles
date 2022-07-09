const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fiddleSchema = new Schema({
    id: { type: String, required: true },
    userid: { type: String, required: true },
    name: { type: String, required: true, default: 'Untitled Fiddle' + Date.now() },
    code: { type: String, default: '' },
    language: { type: String, default: '' }
});

module.exports = mongoose.model('fiddle', fiddleSchema);