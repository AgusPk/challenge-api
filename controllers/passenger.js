const Passenger = require("../models/passenger")
module.exports = {
  async index(req, res) {
    try {
      const passengers = await Passenger.findAll({ include: { all: true, nested: true }});
      res.status(200).send(passengers);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
  async create(req, res) {
    try {
      const passsenger = await Passenger.create({
        name: req.body.name,
        code: req.body.code,
      });
      res.status(201).send(passsenger);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  },
  async show(req, res) {
    try {
      const passenger = await Passenger.findByPk(req.params.passengerId);
      if (passenger) {
        res.status(200).send(passenger);
      } else {
        res.status(404).send("Passenger Not Found");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },

  async destroy(req, res) {
    try {
      const passenger = await Passenger.findByPk(req.params.passengerId);
      if (passenger) {
        await passenger.destroy();
        res.status(200).send("Passenger deleted");
      } else {
        res.status(404).send("Passenger Not Found");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  },
};
