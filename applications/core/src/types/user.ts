import {User as UserPrisma} from '@prisma/client';

export type User = Readonly<UserPrisma>;

export type UserCreation = Readonly<{
  name: User['name'];
  email: User['email'];
  password: User['password'];
}>;

export type UserAuthentication = Readonly<{
  email: User['email'];
  password: User['password'];
}>;
