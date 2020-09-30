import {encaseP} from 'fluture';
import {prisma} from '../database';
import {UserCreation} from '@gathering/core';

export const findUsers = () => encaseP (prisma.user.findMany) ({});

export const findUser = (email: string) =>
  encaseP (prisma.user.findOne) ({where: {email}});

export const createUser = (data: UserCreation) =>
  encaseP (prisma.user.create) ({data});
