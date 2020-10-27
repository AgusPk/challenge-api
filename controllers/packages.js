const { Package } = require("../models/index");
const { PackageCategories } = require("../models/index");
module.exports = {
  async create(req, res) {
    let reqPackage = req.body.package;

    try {
      let package = await Package.create({
        name: reqPackage.name,
        categoryId: reqPackage.categoryId,
        passengerId: reqPackage.passengerId,
      });
      PackageCategory =  await package.getPackageCategory();
      res.status(201).send({...package.dataValues, PackageCategory});
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
