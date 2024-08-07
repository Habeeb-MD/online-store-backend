const { ProductType } = require("../models");

const createProductType = async (typeData) => {
  return await ProductType.create(typeData);
};

const getProductTypes = async () => {
  return await ProductType.findAll();
};

const getProductTypeById = async (id) => {
  return await ProductType.findByPk(id);
};

const updateProductType = async (id, typeData) => {
  return await ProductType.update(typeData, {
    where: { id },
  });
};

const deleteProductType = async (id) => {
  return await ProductType.destroy({
    where: { id },
  });
};

module.exports = {
  createProductType,
  getProductTypes,
  getProductTypeById,
  updateProductType,
  deleteProductType,
};
