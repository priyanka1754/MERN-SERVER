// schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!,
    name: String!,
    email: String!,
    password: String!
}

input CreateUserInput {
    name: String!,
    email: String!,
    password: String!
}

type Query {
    
    getUser(id: ID!): User,
    getAllUsers:[User]
}

type Mutation {
    createUser(input: CreateUserInput!): User,
    changePass(id: ID!, password: String!): User
}
`;

module.exports = typeDefs;
