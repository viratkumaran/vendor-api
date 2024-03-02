const mongoose = require('mongoose');
const employeeDb = mongoose.model("Employee");
const customId = require("custom-id");
const upload = require("../image_upload");

const employeeController = {
    
    async employeeCreation(req,res){
        try{
            let getEmpData =req.body
            if(getEmpData){
                console.log("testdata",getEmpData)
                let customerIdGenerator =customId({
                    name:"Karbon",
                    randomLength:2,
                })
                console.log("customerIdGenerator",customerIdGenerator)
                let obj={
                    "name": req.body.name,
                    "lastname":req.body.lastname,
                    "dob":req.body.dob,
                    "qualification":req.body.qualification,
                    "certificate":req.body.certificate,
                    "aadhar":req.body.aadhar,
                    "desc":req.body.desc,
                    "email":req.body.email,
                    "password":req.body.password,
                    "serviceName":req.body.serviceName,
                    "PhoneNumber":req.body.PhoneNumber,
                    "currentLocations":req.body.currentLocations,
                    "empid":customerIdGenerator,
                    "jobtitle":"Executive",
                    "availableStatus":req.body.availableStatus,
                    "slot":req.body.slot
                }
                let employeeCreate =await employeeDb.create(obj);
                if(employeeCreate){
                    res.json({"status":true,"message":"Employee Created Successfully"});

                }else{
                    res.json({"status":false,"message":"Failed to createEmployee"});

                }
            }else{
                res.json({"status":false,"message":"Error"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async getEmployee(req,res){
        try{
            let getEmployee = await employeeDb.find({ })
            // console.log('EMP------------',getEmployee)
            // return false;
            if(getEmployee){
                res.json({"status":true,"message":"Successfully fetched the employee list",data:getEmployee})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async updateEmployee(req,res){
        try{
            let getValue =req.body;
            if(getValue){   
            let updateEmp = await employeeDb.updateOne({"_id":req.body._id},{$set:getValue});
            console.log(updateEmp)
            res.json({"status":true,"message":"Employee Updated successfully"});
            }else{
                res.json({"status":false,"message":"Employee not Updated"});
            }

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"});
        }
    },
    async deleteEmployee(req,res){
        try{
            console.log('yrrr',req.body)
            // return false;
            let deleteEmp = await employeeDb.deleteOne({"_id":req.body.id});
            console.log(deleteEmp)
            res.json({"status":true,"message":"Employee Deleted successfully"})

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    // User details Api for mobile
    async userLogin(req,res){
        try{
            let getUserLoginData = req.body;
            console.log(getUserLoginData)
            if(getUserLoginData){
                getUserLoginData.email= (getUserLoginData.email).toLowerCase();
                let userLogin =await employeeDb.findOne({email: getUserLoginData.email, password:getUserLoginData.password});
                console.log(userLogin,'testuser--------------')
                if(userLogin.availableStatus == 'Approved'){
                    res.json({"status":true,"message":"Login Successfully",data:userLogin});
                }else{
                    res.json({"status":false,"message":"Admin need to Approve"})
                }
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    async getProfileUser(req,res){
        try{
            let getServicedet = await employeeDb.find({ })
            // return false;
            if(getServicedet){
                res.json({"status":true,"message":"Successfully fetched the Product list",data:getServicedet})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async updateImages(req,res){
        // const file = req.files[0];
        console.log(req.files); 
                // const imageFileFilter=(req,file,cb)=>{
                //     if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
                //         return cb(new Error ('You can upload only image files!'),false)
                //     }
                //     cb(null,true)
                // }
                res.send({
                    status: "success",
                    message: "Files uploaded successfully",
                    data: req.files,
                  });
    }

};

// function uploadImage(){
//     console.log('file')
//     const imageStorage =multer.diskStorage({
//         destination:(req,file,cb)=>{cb(null,'/server/uploads');},
//         filename:(req,file,cb)=>{cb(null,file.originalname)}
//     });
//     const imageFileFilter=(req,file,cb)=>{
//         if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
//             return cb(new Error ('You can upload only image files!'),false)
//         }
//         cb(null,true)
//     }
//     let upload = multer({
//         storage:imageStorage,
//         fileFilter:imageFileFilter
//     }).single('vendor_file')
// }

module.exports=employeeController;