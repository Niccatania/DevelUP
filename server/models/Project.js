const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
            match: [/^(pending)|(in progress)|(complete)$/, 'Must be pending, in progress, or complete']
        },
        dateCreated: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        }
    }
);

const Project = model('Project', projectSchema);

module.exports = Project;