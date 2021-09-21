import { BasicUser } from './users.interface';
import request from 'supertest';
import App from '../../app';
import { CreateUserDto } from '@modules/user/users.dto';
import User from '@modules/user/users.model';
import users from '@modules/user/users.model';
import UserRoute from '@modules/user/users.route';
import { UserDao } from './users.dao';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Users', () => {
  const userDao = new UserDao();
  describe('[GET] /users', () => {
    it('response statusCode 200 / findAll', () => {
      const findUser: User[] = userDao.findAll();
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).get(`${usersRoute.path}`).expect(200, { data: findUser, message: 'findAll' });
    });
  });

  describe('[GET] /users/:id', () => {
    it('response statusCode 200 / findOne', () => {
      const userId = 1;
      const findUser: BasicUser = userDao.findById(userId);
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200, { data: findUser, message: 'findOne' });
    });
  });

  describe('[POST] /users', () => {
    it('response statusCode 201 / created', async () => {
      const userData: CreateUserDto = {
        email: 'test@email.com',
        password: 'q1w2e3r4',
      };
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
    });
  });
});
