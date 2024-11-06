const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Microservice CRUD operations
app.get('/microservice/items', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/api/items');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/microservice/items', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5000/api/items', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/microservice/items/:id', async (req, res) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/items/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/microservice/items/:id', async (req, res) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/items/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Azure Function CRUD operations
app.get('/azure-function/items', async (req, res) => {
  try {
    const response = await axios.get('https://serverlessformativa.azurewebsites.net/api/getVacina');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/azure-function/items/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://serverlessformativa.azurewebsites.net/api/getVacina/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/azure-function/items', async (req, res) => {
  try {
    const response = await axios.post('https://serverlessformativa.azurewebsites.net/api/createVacina', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/azure-function/items/:id', async (req, res) => {
  try {
    const response = await axios.put(`https://serverlessformativa.azurewebsites.net/api/updateVacina/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/azure-function/items/:id', async (req, res) => {
  try {
    const response = await axios.delete(`https://serverlessformativa.azurewebsites.net/api/deleteVacina/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`BFF listening at http://localhost:${port}`);
});