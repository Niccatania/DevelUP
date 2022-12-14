const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Project = require("./Project");

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must use a valid email address']
        },
        password: {
            type: String,
            required: true
        },
        projects: [Project.schema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// hash password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare and validate password to log user in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// add projectCount field
userSchema.virtual('projectCount').get(function () {
    return this.projects.length;
});

const User = model('User', userSchema);

module.exports = User;