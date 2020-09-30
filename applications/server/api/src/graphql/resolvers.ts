import {findUsers, createUser, findUser} from '@gathering/database';

export const resolvers = {
  Query: {
    getUsers: () => findUsers (),
    getUser: (_: any, args: any) => findUser (args.email),
  },
  Mutation: {
    createUser: (_: any, args: any, _context: any) => createUser (args),
  },
};
