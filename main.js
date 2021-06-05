const express = require("express");
const db = require("./database/config");

const routes = require("./routes/api/routes");

var cors = require("cors");
var app = express();

var allowlist = ["http://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

db.connect((err) => {
  if (err) {
    throw err;
    console.log("Database Not Connected. Check again....");
  } else {
    console.log("MySql Database Connected....");
  }
});

//const app = express();

// Middleware
app.use(express.json());
app.use(cors(corsOptionsDelegate));

// Routes
app.use("/", routes);

app.get("/test", (req, res) => {
  res.send("Hello world !!!");
});

app.listen(process.env.PORT || "5000", () =>
  console.log(`Server Running on port: ${process.env.PORT || "5000"}`)
);
