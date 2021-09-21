import { BasicUser } from './users.interface';
import User from './users.model';

export class UserDao {
  private static users: User[] = [
    new User({
      id: 1,
      email: 'lim@gmail.com',
      password: '$2b$10$hmrwtGwC.QlfWt6YWaT3S.FP9CarS3.V9n3Qr.d9y2ovcan0oxs56',
    }),
  ];

  public findAll(): User[] {
    return [...UserDao.users];
  }

  public findById(id: number): BasicUser {
    const user = UserDao.users.find(user => user._id === id);
    return user._data;
  }

  public find(crieteria): User[] {
    return UserDao.users.filter(user => {
      let matched = true;
      Object.keys(crieteria).forEach(key => {
        if (user[key] !== crieteria[key]) matched = false;
      });
      return matched;
    });
  }

  public create(email, password): BasicUser {
    const newUser = new User({ id: this.genId(), email, password });
    UserDao.users.push(newUser);
    return this.findById(newUser._id);
  }

  private genId() {
    return this.length() + 1;
  }

  private length() {
    return UserDao.users.length;
  } 
}
