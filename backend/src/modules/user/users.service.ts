import { BasicUser } from '@modules/user/users.interface';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '@modules/user/users.dto';
import HttpException from '@exceptions/HttpException';
import User from '@modules/user/users.model';
import { isEmpty } from '@utils/util';
import { UserDao } from '@modules/user/users.dao';

class UserService {
  private userDao = new UserDao();

  public async findAllUser(): Promise<User[]> {
    const users: User[] = this.userDao.findAll();
    return users;
  }

  public async findUserById(userId: number): Promise<BasicUser> {
    const findUser: BasicUser = this.userDao.findById(userId);
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<BasicUser> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const foundUser: User = this.userDao.find({ email: userData.email })[0];
    if (foundUser) throw new HttpException(409, `Your email ${userData.email} already exists`);

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser: BasicUser = this.userDao.create({ email: userData.email, password: hashedPassword });

    return newUser;
  }
}

export default UserService;
