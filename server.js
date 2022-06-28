const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "devuser",
  password: "OBIwan099*",
  database: "TaskTracker",
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
class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM tasks";

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async insertNewName(name) {
    try {
      const dateAdded = new Date();
      const insertId = await new Promise((resolve, reject) => {
        const query = "INSERT INTO tasks (task_text) VALUES ?;";

        connection.query(query, [name, dateAdded], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      console.log(insertId);
      return insertId;
    } catch (error) {
      console.log(error);
    }
  }
  async updateNameById(id, name) {
    try {
      id = parseInt(id, 10);
      const response = await new Promise((resolve, reject) => {
        const query = "UPDATE tasks SET task_text = ? WHERE id = ?";

        connection.query(query, [name, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });

      return response === 1 ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

module.exports = DbService;
