const express = require('express');
const router = express.Router();
const jobcontroller = require('../controllers/jobcontroller');

router.post('/create', jobcontroller.create);
router.get('/getAll', jobcontroller.getAll);
router.delete('/deleteById', jobcontroller.deleteById);
router.put('/update', jobcontroller.update);

module.exports = router;