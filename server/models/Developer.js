const { Schema, model } = require('mongoose');

const developerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        about: {
            type: String,
            required: true
        },
        github: {
            type: String
        },
        portfolio: {
            type: String
        },
        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Project'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// add projectCount field
developerSchema.virtual('projectCount').get(function () {
    return this.projects.length;
});

const Developer = model('Developer', developerSchema);

module.exports = Developer;