process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@app';
import AuthRoute from 'modules/auth/auth.route';
import IndexRoute from 'modules/defaults/index.route';
import UsersRoute from 'modules/user/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
