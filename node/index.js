const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log('Listening on port 3001!');
});

app.get('/', (req, res) => {
    res.send("Hello World!")
});