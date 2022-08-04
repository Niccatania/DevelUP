const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        password: String
        email: String
        projects: [Project]
    }

    type Service {
            description: String
            price: Float
        }

    type Developer {
        _id: ID
        name: String
        image: String
        about: String
        services: [Service]
    }

    type Project {
        _id: ID
        title: String
        description: String
        status: String
        dateCreated: String
    }
    

    type Query {
        user: User
        allUsers: [User]
        developer: Developer
        allDevelopers: [Developer]
        service: Service
        allServices: [Service]
        project: Project
        allProjects: [Project]
    }
`;
module.exports = typeDefs;
