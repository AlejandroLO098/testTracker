const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "devuser",
  password: "OBIwan099*",
  database: "ToDoList",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else if (!err) {
    console.log("You are connected!");
  }
});

app.listen(3306, () => {
  console.log(`listening on port`);
});
