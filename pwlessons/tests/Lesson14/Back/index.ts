import express from "express";
import mysql from "mysql";
import { load } from "ts-dotenv";
import * as dotenv from 'dotenv';
dotenv.config();


const env = load({
  HOST: String,
  USERNAME: String,
  DATABASE: String,
  PASSWORD: String,
  PORT: Number
});


let pool = mysql.createPool({
    host: env.HOST,
    user: "automation_heraction",
    password: env.PASSWORD,
    database: env.DATABASE
  });
// console.log(env.HOST)
//console.log(env.USERNAME)
// console.log(env.PASSWORD)
// console.log(env.DATABASE)
// console.log(env.PORT)

const app = express();

app.use(express.json());

//all users
app.get("/users_kiselychnyk", (req, res) => {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error("Error getting connection from pool", err);
      return res.status(500).send("Server error");
    }

    connection.query(`SELECT * FROM users_kiselychnyk`, function (error, results, fields) {
      connection.release(); 

      if (error) {
        console.error("Query error", error);
        return res.status(500).send("Server error");
      }

      res.json(results);
    });
  });
});

//get per user_id
app.get("/users_kiselychnyk/:user_id", (req, res) => {
  const { user_id } = req.params;

  pool.getConnection(function (err, connection) {
    if (err) {
      console.error("Error getting connection from pool", err);
      return res.status(500).send("Server error");
    }

    connection.query(
      `SELECT * FROM users_kiselychnyk WHERE user_id = ${user_id}`,
      function (error, results, fields) {
        connection.release();
        
        if (error) {
          console.error("Query error", error);
          return res.status(500).send("Server error");
        }

        console.log(results);
        res.json(results);
      }
    );
  });
});

//create new user
app.post("/user", (req, res) => {
  const { user_name, email, password } = req.body;

  pool.getConnection(function (err, connection) {
    if (err) {
      console.error("Error getting connection from pool", err);
      return res.status(500).send("Server error");
    }

    const query = `INSERT INTO users_kiselychnyk (user_name, email, password) VALUES (?, ?, ?)`;
    connection.query(query, [user_name, email, password], function (error, results, fields) {
      connection.release();
      
      if (error) {
        console.error("Query error", error);
        return res.status(500).send("Server error");
      }

      console.log(results);
      res.status(201).send("User created");
    });
  });
});

//delete user per user_id
app.delete("/user/:user_id", (req, res) => {
    const { user_id } = req.params;
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting connection from pool", err);
        return res.status(500).send("Server error");
      }
  
      const query = `DELETE FROM users_kiselychnyk WHERE user_id = ${user_id}`;
      connection.query(query, [user_id], (error, results) => {
        connection.release();
  
        if (error) {
          console.error("Query error", error);
          return res.status(500).send("Server error");
        }
  
        if (results.affectedRows === 0) {
          return res.status(404).send("User not found");
        }
  
        res.status(200).send(`User with ID ${user_id} deleted`);
      });
    });
  });
  
  //update user
  app.put("/user/:user_id", (req, res) => {
    const { user_id } = req.params;
    const { user_name, email, password } = req.body;
  
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting connection from pool", err);
        return res.status(500).send("Server error");
      }
  
      const query = `UPDATE users_kiselychnyk SET user_name = ?, email = ?, password = ? WHERE user_id = ?`;
      connection.query(query, [user_name, email, password, user_id], (error, results) => {
        connection.release();
  
        if (error) {
          console.error("Query error", error);
          return res.status(500).send("Server error");
        }
  
        if (results.affectedRows === 0) {
          return res.status(404).send("User not found");
        }
  
        res.status(200).send(`User with ID ${user_id} updated`);
      });
    });
  });
  

app.listen(env.PORT, () => {
  console.log(`Listening on port ${env.PORT}`);
});
