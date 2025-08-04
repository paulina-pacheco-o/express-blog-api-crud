const express = require('express');

const router = express.Router();

//Index
router.get('/', (req, res) => {
  res.send('Lista post')
});

//Show
router.get('/:id', (req, res) => {
  res.send(`Dettaglio del post con id ${req.params.id}`);
});

//Create
router.post('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

//Update
router.put('/:id', (req, res) => {
  res.send(`Modifica totale del post con id ${req.params.id}`);
});

//Delete
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post con id ${req.params.id}`);
});

module.exports = router;

