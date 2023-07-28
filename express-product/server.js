// app.js
const express = require('express');
const app = express();

// Sample product data
const sampleProduct = {
  id: 1,
  name: 'Sample Product',
  description: 'This is a sample product.',
  price: 19.99,
};

// Define a route to return the sample product
app.get('/api/product', (req, res) => {
  res.json(sampleProduct);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
