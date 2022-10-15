const express = require('express');
const app = express();
  
app.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});
  
app.get('/:id', (req, res) => {
  res.send(`<h1>${req.params.id}</h1>`);
});
  
app.listen(9000, () => {
  console.log('Server is up on port 9000');
});

db.genres.insert([{"genreid": 1, "genre": "comedy"},{"genreid": 2, "genre": "drama"},{"genreid": 3, "genre": "action"},{"genreid": 4, "genre": "romance"},{"genreid": 5, "genre": "horror"}])