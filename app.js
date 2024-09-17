const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// static files
app.use(express.static("public"));

// Templeting engines
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Connection pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "fcj-management-db-instance.cx4ccmg4mypa.ap-southeast-1.rds.amazonaws.com",
  user: "usermgt",
  password: "admin",
  database: "123Vodanhphai",
  port: 3306,
});

// connect to DB
pool.getConnection((err, connection) => {
  if (err) throw err; //not connected!!
  console.log("connected as ID " + connection.threadId);
});

const routes = require("./server/routes/user");
app.use("/", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
