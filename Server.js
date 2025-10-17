const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");



const app = express();
app.use(cors());
app.use(bodyParser.json());





const db = mysql.createConnection({

  host: "localhost",

  user: "root",

  password: "",

  database: "FPT1_Pacot",

});



db.connect((err) => {

  if (err) throw err;

  console.log("Database connected successfully");

});





app.get("/patients", (req, res) => {

  db.query("SELECT * FROM patient_Pacot", (err, results) => {

    if (err) throw err;

    res.json(results);

  });

});





app.put("/patients/:id", (req, res) => {

  const { id } = req.params;

  const { firstname } = req.body;

  db.query(

    "UPDATE patient_Pacot SET firstname = ? WHERE id = ?",

    [firstname, id],

    (err, result) => {

      if (err) throw err;

      res.json({ message: "Firstname updated successfully!" });

    }

  );

});



app.listen(5000, () =>

  console.log("Server running at http://localhost:5000")

);



           
