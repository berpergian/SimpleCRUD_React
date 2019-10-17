const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql      = require('mysql');

// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'student_data'
});

connection.connect();

// Initialize the app
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server
app.listen(4000, () => {
 console.log('Go to http://localhost:4000/student to see posts');
});

// https://expressjs.com/en/guide/routing.html
/* Get all student data */
app.get('/student', function (req, res) {
	const sql_query = 'SELECT * FROM student';
    connection.query(sql_query, function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

/* Post a new student data */
app.post('/addstudent', function (req, res) {
	const sql_query = "INSERT INTO `student` (`name`, `address`) VALUES ('" +req.body.name+"','"+req.body.address+"')";
	console.log(sql_query);

    connection.query(sql_query , function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});