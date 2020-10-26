"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Passengers",
      [
        {
          name: "Marcelo Gallardo",
          code: "54AR3",
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Leo Ponzio",
          code: "72AR3",
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );

    await queryInterface.bulkInsert(
      "PackageCategories",
      [
        { name: "Grande", id: 1, createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Pequeño",
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Prenda", id: 3, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Packages",
      [
        {
          name: "Valija",
          id: 1,
          passengerId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mochila",
          id: 2,
          passengerId: 2,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bufanda",
          id: 3,
          passengerId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bolso",
          id: 4,
          passengerId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
