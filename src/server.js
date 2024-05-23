const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();
const cors = require('cors');

// Middleware setup
app.use(cors());
app.use(bodyParser.json()); // Use body-parser to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, this is the backend for the PartSelect chat agent.');
  });


app.post('/get-ai-message', (req, res) => {
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);

  if (!req.body.query) {
    return res.status(400).json({ error: 'Bad Request: Missing "query" in request body' });
  }

  const userQuery = req.body.query;
  console.log('Received query:', userQuery);

  const message = {
    role: "assistant",
    content: `You asked: "${userQuery}". Here's the response from the backend.`
  };

  res.json(message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});