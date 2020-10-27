function codeValidator(req, res, next) {
  let { code } = req.body;
  const letter = /[a-zA-Z]/;
  const number = /[0-9]/;
  const valid = number.test(code) && letter.test(code);
  if (!valid) {
    return res.status(422).send({message: "El código de vuelo debe ser alfanumérico"});
  }
  next();
}

module.exports = {
  codeValidator,
};
