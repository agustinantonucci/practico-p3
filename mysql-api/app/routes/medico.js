const express = require('express');
const router = express.Router();
const medico = require('../services/medico');

/* GET medicos */
router.get('/', async function(req, res, next) {
  try {
    res.json(await medico.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error mientras se obtenian datos de medicos `, err.message);
    next(err);
  }
});

/* POST medico */
router.post('/medico/', async function(req, res, next) {
  try {
    console.log(medico);
    res.json(await medico.create(req.body));
  } catch (err) {
    console.error(`Error al crear un medico `, err.message);
    next(err);
  }
});

/* PUT medico */
router.put('/medico/:id', async function(req, res, next) {
  try {
    res.json(await medico.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar medico`, err.message);
    next(err);
  }
});

/* DELETE medico */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await medico.remove(req.params.id));
  } catch (err) {
    console.error(`Error al eliminar un medico`, err.message);
    next(err);
  }
});

module.exports = router;
