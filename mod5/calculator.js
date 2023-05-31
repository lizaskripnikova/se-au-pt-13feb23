// Slide 37

const express = require('express');
const app = express();

app.get('/calculator/add', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 + num2;
    res.json({ result });
  });
  
  app.get('/calculator/subtract', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 - num2;
    res.json({ result });
  });
  
  app.get('/calculator/multiply', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result = num1 * num2;
    res.json({ result });
  });
  
  app.get('/calculator/divide', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    if (num2 === 0) {
      res.status(400).json({ error: "Cannot divide by zero" });
    } else {
      const result = num1 / num2;
      res.json({ result });
    }
  });
  

  const port = 5000; 
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
    // use http://localhost:5000/calculator/add?num1=5&num2=3 as an example