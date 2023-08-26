const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobcontroller');

router.post('/create', jobController.create);
router.get('/getAll', jobController.getAll);
router.put('/update/:id', jobController.update);
router.delete('/delete/:id', jobController.deleteById);
router.get('/search', jobController.search);

module.exports = router;
