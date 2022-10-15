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