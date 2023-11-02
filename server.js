const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createPool({
  connectionLimit: 100,
  host: "107.180.1.16",
  user: "fall2023team5",
  password: "fall2023team5",
  database: "fall2023team5",
  port: "3306"
});

db.getConnection((err, connection) => {
  if (err) throw (err);
  console.log("DB connection successful: " + connection.threadId);
});

const bcrypt = require("bcrypt");
app.use(express.json()); // Middleware to read req.body.<params>





// CREATE USER
app.post("createUser", async (req, res) => {
  console.log("Route accessed"); // This is a helpful log to verify the route is accessed
  const { firstName, lastName, email, username, password } = req.body;

  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sqlSearch = "SELECT * FROM userInfo WHERE username = ?";
  const search_query = mysql.format(sqlSearch, [username]);

  const sqlInsert = "INSERT INTO userInfo (firstName, lastName, email, username, password) VALUES (?, ?, ?, ?, ?)";
  const insert_values = [firstName, lastName, email, username, hashedPassword];
  const insert_query = mysql.format(sqlInsert, insert_values);

  db.getConnection(async (err, connection) => {
    if (err) {
      console.error("Error connecting to the database: " + err);
      return res.status(500).json({ error: "Database connection error" });
    }

    connection.query(search_query, (err, results) => {
      if (err) {
        connection.release();
        console.error("Error searching for existing user: " + err);
        return res.status(500).json({ error: "Database query error" });
      }

      if (results.length > 0) {
        connection.release();
        return res.status(409).json({ error: "User already exists" });
      }

      connection.query(insert_query, (err, results) => {
        connection.release();

        if (err) {
          console.error("Error inserting new user: " + err);
          return res.status(500).json({ error: "Database query error" });
        }

        console.log("New user created with ID: " + results.insertId);
        return res.status(201).json({ message: "User created successfully" });
      });
    });
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
