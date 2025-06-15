const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// 🔹 STEP 2.1: Sample Invoice Array
let invoices = [
  {
    id: 1,
    client: "Chinedu Enterprises",
    amount: 120000,
    currency: "NGN",
    status: "paid",
    date: "2025-06-14"
  }
];

// Step 1 Routes
app.get('/', (req, res) => {
  res.send('🚀 QuickBill Backend Live');
});

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Pong!' });
});

// ✅ STEP 2.2: Get all invoices
app.get('/api/invoices', (req, res) => {
  res.json(invoices);
});

// ✅ STEP 2.3: Add new invoice
app.post('/api/invoices', (req, res) => {
  const newInvoice = req.body;

  if (!newInvoice.client || !newInvoice.amount) {
    return res.status(400).json({ message: 'Client and amount are required' });
  }

  newInvoice.id = invoices.length + 1;
  newInvoice.date = new Date().toISOString().slice(0, 10);
  invoices.push(newInvoice);

  res.status(201).json({
    message: 'Invoice created successfully',
    invoice: newInvoice
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
