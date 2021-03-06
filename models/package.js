"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Package.belongsTo(models.PackageCategories, {
        foreignKey: "categoryId",
      });
      Package.belongsTo(models.Passenger, {
        foreignKey: "passengerId",
        onDelete: "CASCADE",
      });
      // define association here
    }
  }
  Package.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Package",
    }
  );
  return Package;
};
