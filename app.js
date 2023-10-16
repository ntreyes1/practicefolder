// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('<html><body><h1>Hello, World!</h1></body></html>');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
