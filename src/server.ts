import App from './app';
import AuthRoute from '@modules/auth/auth.route';
import IndexRoute from '@modules/defaults/index.route';
import UsersRoute from '@modules/user/users.route';
// import validateEnv from '@utils/validateEnv';

// // validateEnv();

const app = new App([new IndexRoute(), new AuthRoute(), new UsersRoute()]);

app.listen();
