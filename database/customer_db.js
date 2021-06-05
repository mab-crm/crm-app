const db = require("./config");

module.exports = function createNewCustomer(customer) {
  const newCustomer = db.query(
    `INSERT INTO Customers(name, address, phone_no) VALUES(?,?,?)`,
    [customer.name, customer.address, customer.phone_no]
  );

  console.log(customer);
  let message = "New Customer Created Successfully..!";

  return { message };
};
