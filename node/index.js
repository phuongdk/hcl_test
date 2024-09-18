/* Write a routing that integrate with client-side and return a data user response:
 1. The response should simulate success and failed result.
 2. The response should return users array (each user will have their teams nested inside as an array of data)
    if the result return from response is success.
 3. The response should return "Error fetching data" message if the result return from response is failed.
 Notes: Your data source will be retrieved from "data" folder.
*/

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log('Listening on port 3001!');
});

app.get('/', (req, res) => {
  res.json("Hello World!");
});

app.get('/user', (req, res) => {
  // Simulate random success or failure
  // if (Math.random() > 0.8) {
    // Your success result
  // } else {
    // Your error message
  // }
})