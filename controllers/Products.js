const Product = require("../models/Note");

const getALLProducts = async (req, res) => {
  const products = await Product.find().lean();

  if (!products?.length) {
    return res.status(400).json({ message: "No Products found" });
  }
  const productsWithus = await Promise.all(
    products.map(async (product) => {
      return product;
    })
  );

  res.json(productsWithus);
};

const createNewProduct = async (req, res) => {
  const {
    ProductID,
    ProductName,
    ProductSize,
    ProductType,
    ProductMrp,
    ProductStatus,
  } = req.body;

  if (
    !ProductID ||
    !ProductName ||
    !ProductSize ||
    !ProductType ||
    !ProductMrp ||
    !ProductStatus
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const product = await Product.create({
    ProductID,
    ProductName,
    ProductSize,
    ProductType,
    ProductMrp,
    ProductStatus,
  });

  if (product) {
    return res.status(201).json({ message: "New Product created" });
  } else {
    return res.status(400).json({ message: "Invalid Product data received" });
  }
};

const updateProduct = async (req, res) => {
  const {
    ProductID,
    ProductName,
    ProductSize,
    ProductType,
    ProductMrp,
    ProductStatus,
  } = req.body;

  if (
    !ProductID ||
    !ProductName ||
    !ProductSize ||
    !ProductType ||
    !ProductMrp ||
    !ProductStatus
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const product = await Product.findById(ProductID).exec();

  if (!product) {
    return res.status(400).json({ message: "product not found" });
  }

  product.ProductID = ProductID;
  note.ProductName = ProductName;
  note.ProductSize = ProductSize;
  note.ProductType = ProductType;
  note.ProductStatus = ProductStatus;

  const updateProduct = await product.save();

  res.json(`'${updateProduct}' updated`);
};
const deleteProduct = async (req, res) => {
  const { ProductID } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Product ID required" });
  }

  const product = await Product.findById(ProductID).exec();

  if (!product) {
    return res.status(400).json({ message: "product not found" });
  }

  const result = await product.deleteOne();

  const reply = `Product '${result.ProductName}' with ID ${result.ProductID} deleted`;

  res.json(reply);
};

module.exports = {
  getALLProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
