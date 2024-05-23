const express = require('express');
const app = express();
const cors = require('cors');

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, this is the backend for the PartSelect chat agent.');
});

app.post('/get-ai-message', (req, res) => {
  const userQuery = req.body.query;

  // Log the incoming request
  console.log('Received query:', userQuery);

  // Process the user query and generate a response
  const message = {
    role: "assistant",
    content: `You asked: "${userQuery}". Here's the response from the backend.`
  };

  // Send the response back to the client
  res.json(message);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});