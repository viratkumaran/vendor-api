const express = require('express');
const router = express.Router();
const userController =require('../Controllers/userController');
// router.post('/userCreation', userController.userCreation);
router.post('/userLogin',userController.userLogin);
router.get('/getUserList',userController.getUserList);
router.post('/addEntry',userController.addEntry);
router.post('/addOrder',userController.addOrder);
router.post('/viewEntry',userController.viewEntry);
router.post('/viewOrder',userController.viewOrder);
router.get('/viewReports',userController.viewReports);
router.post('/assignTask',userController.assignTask);
router.post('/updateTask',userController.updateTask);
router.get('/getTask',userController.getTask);
router.post('/deleteTask',userController.deleteTask);

module.exports = router;
