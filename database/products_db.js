const db = require("./config");

module.exports = function createNewProduct(product) {
  const newProduct = db.query(
    `INSERT INTO Products(product_name, product_img, model_no, man_country, category, rating_value) VALUES(?,?,?,?,?,?)`,
    [
      product.product_name,
      product.product_img,
      product.model_no,
      product.man_country,
      product.category,
      product.rating_value,
    ]
  );

  console.log(customer);
  let message = "New Customer Created Successfully..!";

  return { message };
};
