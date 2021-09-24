import { UserDao } from './../modules/user/users.dao';
import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '@exceptions/HttpException';
import { RequestWithUser } from '@modules/auth/auth.interface';
import { JWT_SECRET } from 'configs';
import { DataStoredInToken } from '@interfaces/token.interface';

const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const userDao = new UserDao();
  try {
    const Authorization = req.header('Authorization').split('Bearer ')[1] || null;

    if (Authorization) {
      const secretKey: string = JWT_SECRET;
      const verificationResponse = (await jwt.verify(Authorization, secretKey)) as DataStoredInToken;
      const userId = verificationResponse.id;
      const findUser = userDao.findById(userId);

      if (findUser) {
        req.body.user = findUser;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
