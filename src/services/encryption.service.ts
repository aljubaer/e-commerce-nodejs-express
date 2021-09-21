import { SALT_ROUND } from '../configs';
import bcrypt from 'bcrypt';
import { MatchFunction } from '../types';

export const encryptPassword = async (password: string): Promise<string> =>
  await bcrypt.hash(password, SALT_ROUND);

export const matchPassword: MatchFunction = async(toMatch, source): Promise<boolean> => {
    return await bcrypt.compare(toMatch, source);
}
