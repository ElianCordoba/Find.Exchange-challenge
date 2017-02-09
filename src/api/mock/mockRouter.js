import { Router } from 'express';
import mocks from './mocks';

const getRouter = () => {
  const router = new Router();

  const allowedMethods = ['get', 'post', 'put', 'delete'];
  const routes = Object.keys(mocks);
  routes.forEach(uri => {
    let methods = Object.keys(mocks[uri]).filter(r => allowedMethods.indexOf(r.toLowerCase()) !== -1);
    if (methods.length === 0) {
      methods = allowedMethods;
    }
    methods.forEach(method => {
      console.log(`Register mock route ${method} ${uri}`);
      router[method](uri, (req, res, next) => {
        console.log(`Mock route ${method} ${uri}`);
        if (mocks[uri]) {
          const mockRoute = mocks[uri][method] ? mocks[uri][method] : mocks[uri];
          switch (typeof mockRoute) {
            case 'function': {
              const response = mockRoute(req);
              console.log(`Mock response: ${JSON.stringify(response.body)}`);
              return res.status(response.code).send(response.body);
            }
            case 'object': {
              const response = mockRoute;
              console.log(`Mock response: ${JSON.stringify(response.body)}`);
              return res.status(response.code).send(response.body);
            }
            default: {
              return next(new Error('Unknown type of mock function'));
            }
          }
        }
        next();
      });
    });
  });

  return router;
};

export default getRouter();
