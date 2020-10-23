'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PackageCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PackageCategories.hasMany(models.Package, {
        foreignKey: "categoryId",
        as: "packages"
      });
      // define association here
    }
  };
  PackageCategories.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PackageCategories',
  });
  return PackageCategories;
};