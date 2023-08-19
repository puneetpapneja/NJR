const express =require('express');
const router = express.Router();
const jobController = require('../controllers/jobControllers');

router.post('/Create', jobController.create);
router.get('/getAll',jobController.getAll);
router.delete('/delete',jobController.deleteById);
router.put('/update',jobController.update);
module.exports = router;