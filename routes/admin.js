const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController')

router.post('/adminLogin', adminController.adminLogin);
router.post('/createCollectionDet', adminController.createCollectionDet);

module.exports = router;
