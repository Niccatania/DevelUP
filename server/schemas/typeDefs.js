const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        projects: [Project]
    }

    type Service {
        _id: ID
        description: String
        price: Float
        developer: Developer
    }

    type Developer {
        _id: ID
        name: String
        image: String
        about: String
    }

    type Project {
        _id: ID
        title: String
        description: String
        status: String
        services: [Service]
        dateCreated: String
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID!
        user: User
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
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String! password: String!): Auth
    }
`;
module.exports = typeDefs;
