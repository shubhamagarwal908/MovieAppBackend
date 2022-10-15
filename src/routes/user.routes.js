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

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  .then(() => {
    console.log("Connected to the database!");
    
  })

  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();

    
  });