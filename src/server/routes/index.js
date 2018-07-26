import users from './common/users';
import forms from './common/forms';
import locales from './common/locales';
import products from './common/comments';
import purchases from './common/stories';
import auth from './common/auth';
import react from './web/react';

export default app => {
  users(app);
  forms(app);
  products(app);
  purchases(app);
  locales(app);
  auth(app);
  react(app);
};
