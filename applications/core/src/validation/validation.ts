import {object, string} from 'yup';
import {S,
  applicationErrors,
  UserCreation,
  UserAuthentication,
} from '@gathering/core';

const {encase} = S;

const {
  noName,
  shortName,
  longName,
  noPassword,
  shortPassword,
  longPassword,
  noEmail,
  incorrectEmail,
} = applicationErrors;

export const signUpSchema = object ().shape ({
  name: string ().required (noName).min (4, shortName).max (50, longName),
  email: string ().required (noEmail).email (incorrectEmail),
  password: string ()
    .required (noPassword)
    .min (4, shortPassword)
    .max (50, longPassword),
});

export const signInSchema = object ().shape ({
  name: string ().required (noName).min (4, shortName).max (50, longName),
  password: string ()
    .required (noPassword)
    .min (4, shortPassword)
    .max (50, longPassword),
});

export const validateSignInSchema = (data: UserAuthentication) =>
 encase (signInSchema.validateSync) (data);

export const validateSignUpSchema = (data: UserCreation) =>
 encase (signUpSchema.validateSync) (data);
