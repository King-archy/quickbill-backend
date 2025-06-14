const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
