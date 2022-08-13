const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Service = require('./Service');

const projectSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
            default: "pending",
            match: [/^(pending)|(in progress)|(complete)$/, 'Must be pending, in progress, or complete']
        },
        dateCreated: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },
        services: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Service'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

projectSchema.virtual('totalPrice').get(function() {
    return this.services.reduce((total, service) => total + service.price, 0);
});

const Project = model('Project', projectSchema);

module.exports = Project;