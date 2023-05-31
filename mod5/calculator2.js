// Slide 55

const express = require('express');
const math = require('mathjs'); // Import the mathjs library
const app = express();

app.get('/calculator/add', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = math.add(num1, num2); // Use mathjs to perform addition
  res.json({ result });
});

app.get('/calculator/subtract', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = math.subtract(num1, num2); // Use mathjs to perform subtraction
  res.json({ result });
});

app.get('/calculator/multiply', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = math.multiply(num1, num2); // Use mathjs to perform multiplication
  res.json({ result });
});

app.get('/calculator/divide', (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (num2 === 0) {
    res.status(400).json({ error: "Cannot divide by zero" });
  } else {
    const result = math.divide(num1, num2); // Use mathjs to perform division
    res.json({ result });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
