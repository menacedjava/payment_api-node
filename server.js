const express = require('express');
const app = express();
app.use(express.json());

app.post('/pay', (req, res) => {
    const { amount, cardNumber } = req.body;
    if (!amount || !cardNumber) {
        return res.status(400).send('Invalid payment data');
    }
    res.json({ status: 'success', transactionId: Date.now() });
});

app.listen(3000, () => console.log('Payment API running on port 3000'));
