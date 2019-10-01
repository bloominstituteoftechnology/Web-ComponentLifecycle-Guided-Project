const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const fruits = ['pear', 'mango', 'banana'];
const meats = ['beef', 'chicken', 'fish'];
const todoList = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];

app.get('/market/fruits', (req, res) => {
  res.json(fruits);
});

app.get('/market/meats', (req, res) => {
  res.json(meats);
});

app.get('/todos', (req, res) => {
  res.json(todoList);
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'no such endpoint' });
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
