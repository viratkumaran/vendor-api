const express = require('express');
const router = express.Router();
const serviceController =require('../Controllers/serviceController');

router.post('/serviceCreation', serviceController.serviceCreation);
router.get('/getService',serviceController.getService);
router.post('/updateService', serviceController.updateService);
router.post('/deleteService', serviceController.deleteService);
router.get('/getProductList',serviceController.getProductList);
router.post('/createProduct',serviceController.createProduct);
router.post('/updateProduct',serviceController.updateProduct);
router.post('/deleteProduct',serviceController.deleteProduct);


module.exports = router;
