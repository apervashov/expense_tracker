const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const mongoose = require('mongoose');
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { description, amount, category, date } = req.body;

  const transaction = new Transaction({
    description,
    amount,
    category,
    date,
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('ID to be deleted:', id);


    const objectId = new mongoose.Types.ObjectId(id);

    const transaction = await Transaction.findByIdAndDelete(objectId);
    if (!transaction) {
      console.log('Transaction not found');
      return res.status(404).json({ message: 'Transaction not found' });
    }

    console.log('Transaction deleted successfully');
    res.json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    console.error('Error deleting the transaction:', err.message);
    console.error(err.stack);
    res.status(500).json({ message: 'Server error on deletion' });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { description, amount, category, date } = req.body;
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });

    transaction.description = description || transaction.description;
    transaction.amount = amount !== undefined ? amount : transaction.amount;
    transaction.category = category || transaction.category;
    transaction.date = date || transaction.date;

    const updatedTransaction = await transaction.save();
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
