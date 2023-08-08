const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");
const Product = require("./Product");
const Tag = require("./Tag");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // * `id`
    // * Integer.
    // * Doesn't allow null values.
    // * Set as primary key.
    // * Uses auto increment.
    //====================//
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Product, key: "id" },
    },
    //   * `product_id`
    //   * Integer.
    //   * References the `Product` model's `id`.
    //====================//
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Tag, key: "id" },
    },

    // * `tag_id`
    //   * Integer.
    //   * References the `Tag` model's `id`.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
