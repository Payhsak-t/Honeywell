const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'MovieDB',
});

const movieList = {
  forrestgump: [1, 2, 3, 4, 5],
  pursuitOfHappiness: [1, 2, 9, 4, 5],
  sn: [1, 2, 3, 12, 5],
  tm: [1, 2, 8, 4, 5],
};

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get/:movieId', (req, res) => {
  const id = req.params.movieId;
  console.log(id);
  if (!id) {
    res.status(400);
    res.send('Movie not found!');
  } else {
    res.status(200);
    console.log(movieList[id]);
    res.send(movieList[id]);
  }
});

app.post('/api/insert', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlSelect = 'SELECT * FROM users WHERE username = ? and password = ?;';
  db.query(sqlSelect, [username, password], (err, response) => {
    if (response.length === 0) {
      res.send({ logIn: false });
    } else res.send({ logIn: true });
  });
});

app.listen(3001, () => {
  console.log('Running on port 3001');
});
