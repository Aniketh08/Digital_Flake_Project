const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/Products");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router
  .route("/")
  .get(productControllers.getALLProducts)
  .post(productControllers.createNewProduct)
  .patch(productControllers.updateProduct)
  .delete(productControllers.deleteProduct);

module.exports = router;
