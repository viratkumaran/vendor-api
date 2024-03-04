const express = require('express');
const router = express.Router();
const serviceController =require('../Controllers/serviceController');

router.post('/serviceCreation', serviceController.serviceCreation);
router.get('/getService',serviceController.getService);
router.post('/updateService', serviceController.updateService);
router.post('/deleteService', serviceController.deleteService);
router.get('/getAreaList',serviceController.getAreaList);
router.post('/createArea',serviceController.createArea);
router.post('/updateArea',serviceController.updateArea);
router.post('/deleteArea',serviceController.deleteArea);


module.exports = router;
