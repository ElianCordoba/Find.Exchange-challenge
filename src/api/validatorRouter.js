import { Router } from 'express';
import validate from './requestValidate';

const getRouter = () => {
  const router = new Router();

  router.post('/api/message', validate({
    email: {
      isEmail: true,
    },
    name: {
      notEmpty: true,
    },
    message: {
      notEmpty: true,
    },
  }));

  return router;
};

export default getRouter();
