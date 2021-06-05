const express = require("express");
const router = express.Router();
const db = require("../../database/config");

const createNewCustomer = require("../../database/customer_db");
const createNewProduct = require("../../database/customer_db");

// Customer Routes
router.get("/test-customer", (req, res) => {
  res.json({ msg: "Customer-works" });
});

router.post("/create-customer", (req, res) => {
  console.log(req.body);
  try {
    res.json(createNewCustomer(req.body));
  } catch (err) {
    console.log("Error while creating new Customer");
    console.log(err);
  }
  //console.log(req.body.id);
});

router.get("/customers", (req, res) => {
  const customer_query = "SELECT * FROM Customers";
  db.query(customer_query, (err, data) => {
    if (err) throw err;
    // res.send(JSON.stringify(data));
    res.json(data);
  });
});

// Product Routes
router.get("/test-products", (req, res) => {
  res.json({ msg: "Products-works" });
});

router.post("/create-product", (req, res) => {
  console.log(req.body);
  try {
    res.json(createNewProduct(req.body));
  } catch (err) {
    console.log("Error while creating new Product");
    console.log(err);
  }
  //console.log(req.body.id);
});

router.get("/products", (req, res) => {
  const product_query = "SELECT * FROM Products";
  db.query(product_query, (err, data) => {
    if (err) throw err;
    // res.send(JSON.stringify(data));
    res.json(data);
  });
});

module.exports = router;
