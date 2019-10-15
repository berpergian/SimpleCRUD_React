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

// Initialize the app
const app = express();
app.use(cors())
connection.connect();

// https://expressjs.com/en/guide/routing.html
app.get('/student', function (req, res) {
    connection.query('SELECT * FROM student', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server
app.listen(4000, () => {
 console.log('Go to http://localhost:4000/student to see posts');
});