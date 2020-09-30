import {gql} from 'apollo-server';

export const typeDefs = gql`
  enum Role {
    ADMIN
    MODERATOR
    USER
    STREAMER
  }

  type User {
    id: ID
    role: Role
    createdAt: String
    email: String
    name: String
    password: String
  }

  type Query {
    getUsers: [User]
    getUser(email: String): User
  }

  type Mutation {
    createUser(email: String, name: String, password: String): User
  }
`;
