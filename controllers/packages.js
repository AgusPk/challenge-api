const Package = require("../models/package");
const PackageCategories = require("../models/packagecategories");
module.exports = {
  async create(req, res) {
    let reqPackages = req.body.packages;
    try {
      const packages = await Package.bulkCreate(reqPackages);
      res.status(201).send(packages);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },

  async getCategories(req, res) {
    try {
      const categories = await PackageCategories.findAll();
      res.status(200).send(categories);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
};
