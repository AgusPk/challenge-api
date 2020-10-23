const Package = require("../models/package")
module.exports = {
  async create(req, res) {
    try {
      const package = await Package.create({
        name: req.body.name,
        categoryId: req.body.categoryId,
        passengerId: req.body.passengerId,
      });
      res.status(201).send(package);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

};
