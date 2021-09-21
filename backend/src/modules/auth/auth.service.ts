import { BasicUser } from '@modules/user/users.interface';
import { matchPassword } from '@services/encryption.service';
import { UserDao } from '@modules/user/users.dao';
import UserService from '@modules/user/users.service';
import { TokenProvider } from '@services/token.provider';
import { CreateUserDto } from '@modules/user/users.dto';
import HttpException from '@exceptions/HttpException';
import User from '@modules/user/users.model';
import { isEmpty } from '@utils/util';
import { Token } from '@interfaces/token.interface';

class AuthService {
  public tokenProvider = new TokenProvider();
  private userService = new UserService();
  private userDao = new UserDao();

  public async signup(userToRegister: CreateUserDto): Promise<BasicUser> {
    return this.userService.createUser(userToRegister);
  }

  public async login(userData: CreateUserDto): Promise<{ token: Token; user: BasicUser }> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = this.userDao.find({ email: userData.email })[0];
    if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);
    const isPasswordMatching: boolean = await findUser.matchPassword(userData.password, matchPassword);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const token = this.tokenProvider.createToken(findUser);

    return { token, user: findUser._data };
  }
}

export default AuthService;
