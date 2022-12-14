const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
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
        github: String
        portfolio: String
        projects: [Project]
    }

    type Project {
        _id: ID
        title: String
        description: String
        status: String
        dateCreated: String
        services: [Service]
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
        developer(_id: ID!): Developer
        allDevelopers: [Developer]
        service(_id: ID!): Service
        allServices: [Service]
        project(_id: ID!): Project
        allProjects: [Project]
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(email: String!, password: String!): Auth
        login(email: String! password: String!): Auth
        addProject(title: String! description: String! userid: String serviceIds: [String]): Project
        addService(description: String! price: Float! devId: String): Service
    }
`;
module.exports = typeDefs;
