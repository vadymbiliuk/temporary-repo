import {hashSync, compareSync} from 'bcryptjs';

export const encrypt = (data: string) => hashSync (data);
export const validateEncryption = (data: string) => (hash: string) =>
  compareSync (data, hash);
