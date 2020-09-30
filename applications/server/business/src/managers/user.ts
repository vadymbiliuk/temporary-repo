import {findUser} from '@gathering/database';
import {
  S,
  UserCreation,
  validateSignUpSchema,
} from '@gathering/core';

const {chain, prop, sequence, Either} = S;

export const signUp = (data: UserCreation) => sequence (Either) ([
  validateSignUpSchema (data),
  chain (findUser) (prop ('email') (data)),
]);

console.log (
  validateSignUpSchema ({email: 'email', password: 'password', name: 'name'}),
);
signUp ({email: 'email', password: 'password', name: 'name'});
