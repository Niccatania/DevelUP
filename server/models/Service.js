const { Schema, model } = require('mongoose');

const serviceSchema = new Schema(
    {
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        developer: {
            type: Schema.Types.ObjectId,
            ref: 'Developer'
        }
    }
);

const Service = model('Service', serviceSchema);

module.exports = Service;