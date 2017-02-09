import { Router } from 'express';

/* eslint-disable comma-dangle */

const router = new Router();

/* eslint-disable no-use-before-define */
router.post('/api/message', createMessage);
/* eslint-enable no-use-before-define */

async function createMessage(req, res, next) {
  res.status(404).send({
    errors: [
      { '': "This API route hasn't been implemented yet" }
    ]
  });
}

export default router;
