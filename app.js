const express = require('express');
const app = express();

let items = [];

app.use(express.json());

app.get('/items', (req, res) => {
  res.send('items');
});

app.post('/item', (req, res) => {
    items.push(req.body);
    res.send('items');
  });

  app.delete('/items', (req, res) => {
    items = [];
    res.send('items')
  });

    app.listen(3001, () => {
      console.log('Example app listening on port 3001');
    });