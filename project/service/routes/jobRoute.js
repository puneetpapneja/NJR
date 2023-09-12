const express =require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/Create', jobController.create);
router.get('/getAll',jobController.getAll);
router.delete('/delete',jobController.deleteById);
router.put('/update',jobController.update);
router.get('/searchjob',jobController.searchjob);
module.exports = router;