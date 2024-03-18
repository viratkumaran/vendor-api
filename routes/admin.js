const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController')

router.post('/adminLogin', adminController.adminLogin);
router.post('/createCollectionDet', adminController.createCollectionDet);
router.get('/getCollection', adminController.getCollection);

module.exports = router;
