const { Schema, model } = require('mongoose');
const Project = require('./Project');


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
    },
    /* {
        toJSON: {
            virtuals: true
        }
    } */
);

// add projectCount field
// developerSchema.virtual('projectCount').get(function () {
//     return this.projects.length;
// });

const Developer = model('Developer', developerSchema);

module.exports = Developer;