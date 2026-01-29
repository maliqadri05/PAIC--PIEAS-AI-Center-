import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contacts/submit', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }
  
  // Simulate database save (in memory for testing)
  res.status(201).json({
    success: true,
    message: 'Contact submitted successfully',
    data: {
      id: Math.floor(Math.random() * 10000),
      name,
      email,
      subject,
      message,
      status: 'new',
      created_at: new Date().toISOString(),
    },
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Listening for requests...');
});
