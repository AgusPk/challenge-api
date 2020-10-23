"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Passengers",
      [{ name: "Marcelo Gallardo", code: "54AR3", id: 1 }],
      [{ name: "Leo Ponzio", code: "72AR3", id: 2 }],
      {}
    );

    await queryInterface.bulkInsert(
      "PackageCategories",
      [
        { name: "Grande", id: 1 },
        { name: "Pequeño", id: 2 },
        { name: "Prenda", id: 3 },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Packages",
      [
        { name: "Valija", id: 1, passengerId: 1, categoryId: 1 },
        { name: "Mochila", id: 2, passengerId: 1, categoryId: 2 },
        { name: "Bufanda", id: 3, passengerId: 1, categoryId: 3 },
        { name: "Bolso", id: 4, passengerId: 2, categoryId: 1 },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Passengers", null, {});
    await queryInterface.bulkDelete("PackageCategories", null, {});
    await queryInterface.bulkDelete("Packages", null, {});
  },
};
