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

// Import the myExercises variable from index.js
const myExercises = require('./index.js');

app.get('/', (req, res) => {
  // Use myExercises to generate the HTML content
  let html = `
    <html>
      <body>
        <h1>My Exercises</h1>
        <ul>
  `;

  myExercises.forEach((exercise) => {
    html += `
          <li>Exercise: ${exercise.exercise}</li>
          <li>Distance: ${exercise.distance} miles</li>
          <li>Date: ${exercise.date}</li>
          <br>
    `;
  });

  html += `
        </ul>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

