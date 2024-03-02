const express = require('express');
const router = express.Router();
const employeeController =require('../Controllers/employeeController');
const upload = require("../image_upload");

router.post('/employeeCreation',employeeController.employeeCreation);
router.get('/getEmployee',employeeController.getEmployee);
router.post('/updateEmployee', employeeController.updateEmployee);
router.post('/deleteEmployee', employeeController.deleteEmployee);
router.post('/fileUpload', upload.array("images[]"), employeeController.updateImages);

module.exports = router;
