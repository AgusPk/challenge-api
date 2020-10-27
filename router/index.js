const passengerController = require("../controllers/passenger")
const packageController = require("../controllers/packages")
const {codeValidator} = require('../validators/index')

module.exports = (app) => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome to the jungle!",
    });
  });
  app.get("/api/passengers", passengerController.index);
  app.post("/api/passengers", codeValidator, passengerController.create);
  app.get("/api/passengers/:passengerId", passengerController.show);
  app.delete("/api/passengers/:passengerId", passengerController.destroy);
  app.post("/api/packages", packageController.create);
  app.get("/api/packages/categories", packageController.getCategories);
};
