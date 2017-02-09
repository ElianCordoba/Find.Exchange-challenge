async function validate(req, res, next, schema) {
  if (!schema) {
    next();
  }
  console.log(`Validation request ${req.method} ${req.path}`);
  req.check(schema);

  const errors = await req.getValidationResult();
  if (!errors.isEmpty()) {
    const response = { errors: errors.array() };
    console.log(`Validation failed with errors ${JSON.stringify(response)}`);
    return res.status(400).send(response);
  }
  next();
}

export default (schema) => (...args) => validate(...args, schema);

