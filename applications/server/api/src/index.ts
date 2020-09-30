import {logger} from '@gathering/core';
import {ApolloServer} from 'apollo-server';
import {typeDefs} from './graphql/typeDefs';
import {resolvers} from './graphql/resolvers';

const server = new ApolloServer ({typeDefs, resolvers});

server.listen ().then (({url}) => {
  logger.info (`🚀  Server ready at ${url}`);
});
