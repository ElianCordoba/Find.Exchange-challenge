const mocks = {
  '/api/message': {
    post: (req) => {
      if (req.body.email === 'invalid@find.exchange') {
        return {
          code: 400,
          body: require('./message/error.json'),
        };
      }
      return {
        code: 200,
        body: require('./message/success.json'),
      };
    },
  },
};

export default mocks;
