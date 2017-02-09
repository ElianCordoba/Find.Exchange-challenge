import { Router } from 'express';
import validatorRouter from './validatorRouter';
import mockRouter from './mock/mockRouter';

const getRouter = () => {
  const router = new Router();

  router.use(validatorRouter);

  if (process.env.USE_MOCK) {
    console.log('Using mock router');
    router.use(mockRouter);
    return router;
  }

  router.use(require('./routes/message').default);

  return router;
};

export default getRouter();
