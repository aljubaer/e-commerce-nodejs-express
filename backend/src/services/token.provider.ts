import { ONE_HOUR } from '../configs';
import { Token, DataStoredInToken } from "@interfaces/token.interface";
import User from "@modules/user/users.model";
import { JWT_SECRET } from "../configs";
import jwt from 'jsonwebtoken';

export class TokenProvider {
  public createToken(user: User): Token {
    const dataStoredInToken: DataStoredInToken = { id: user._id };
    const expiresIn: number = ONE_HOUR;

    return { expiresIn, token: jwt.sign(dataStoredInToken, JWT_SECRET, { expiresIn }) };
  }
}
