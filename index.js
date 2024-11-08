const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Microservice CRUD operations
app.get('/microservice/vaca', async (req, res) => {
  try {
    const vacaId = req.query.vacaId;
    const response = await axios.get(`https://microservice-agrocare.gentledune-993b0c35.brazilsouth.azurecontainerapps.io/agro/v1/vaca?vacaId=${vacaId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/microservice/vaca', async (req, res) => {
  try {
    const response = await axios.post('https://microservice-agrocare.gentledune-993b0c35.brazilsouth.azurecontainerapps.io/agro/v1/vaca', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put('/microservice/vaca/:vacaId', async (req, res) => {
  try {
    const response = await axios.put(`https://microservice-agrocare.gentledune-993b0c35.brazilsouth.azurecontainerapps.io/agro/v1/vaca/${req.params.vacaId}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete('/microservice/vaca/:vacaId', async (req, res) => {
  try {
    const response = await axios.delete(`https://microservice-agrocare.gentledune-993b0c35.brazilsouth.azurecontainerapps.io/agro/v1/vaca/${req.params.vacaId}`);
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