import { LoginUserDto } from './../user/users.dto';
import { BasicUser } from './../user/users.interface';
import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@modules/user/users.dto';
import AuthService from '@modules/auth/auth.service';

class AuthController {
  public authService = new AuthService();

  public register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user: CreateUserDto = req.body;
      const signUpUser: BasicUser = await this.authService.signup(user);

      res.status(201).json({ data: signUpUser, message: 'registered' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: LoginUserDto = req.body;
      const { token, user } = await this.authService.login(userData);

      res.status(200).json({ data: { jwt: token, user }, message: 'login' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
