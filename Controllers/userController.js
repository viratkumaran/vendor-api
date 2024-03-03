const mongoose = require('mongoose');
const userDb = mongoose.model("User");
const employeeDb = mongoose.model("Employee");
const entryDb = mongoose.model("Entry");
const orderDb = mongoose.model("Order");
const taskDb = mongoose.model("Task");
const NodeGeocoder = require('node-geocoder');

const userController = {
    async addEntry(req,res){
        try{
            let getuserData =req.body
            if(getuserData){
                let obj={
                    "shopname": req.body.shopname,
                    "phoneno":req.body.phoneno,
                    "companyname":req.body.companyname,
                    "location":req.body.location,
                    "userId":req.body.userId,
                }
                console.log(obj);
                    let entryCreate =await entryDb.create(obj);
                    if(entryCreate){
                        res.json({"status":true,"message":"Entry Created Successfully",data:entryCreate});

                    }else{
                        res.json({"status":false,"message":"Failed to create Entry"});

                    }
                
            }else{
                res.json({"status":false,"message":"Error"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async addOrder(req,res){
        try{
            let getuserData =req.body
            console.log(getuserData)
            // return;
            if(getuserData){
                // let obj={
                //     "ordernumber": req.body.ordernumber,
                //     "productList":{
                //         "name":req.body.productListname,
                //         "price":req.body.price
                //     },
                //     "totalPrice":req.body.price,
                //     "empId":req.body.empId,
                //     "entryId":req.body.entryId,

                // }
                    let oderCreate =await orderDb.create(getuserData);
                    console.log(oderCreate)
                    if(oderCreate){
                        res.json({"status":true,"message":"Order Created Successfully",data:oderCreate});

                    }else{
                        res.json({"status":false,"message":"Failed to create Order"});

                    }
                
            }else{
                res.json({"status":false,"message":"Error"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async userLogin(req,res){
        try{
            let getUserLoginData = req.body;
            console.log(getUserLoginData)
            if(getUserLoginData){
                getUserLoginData.email= (getUserLoginData.email).toLowerCase();
                let userLogin =await employeeDb.findOne({email: getUserLoginData.email, password:getUserLoginData.password});
                if(userLogin){
                    console.log(userLogin,'testuser--------------')
                    let data={
                        userId:userLogin._id,
                        name:userLogin.name,
                        desc:userLogin.desc,
                        empid:userLogin.empid,
                        location:userLogin.currentLocations,
                        companyname:userLogin.serviceName,
                        phoneno:userLogin.PhoneNumber,
                        jobtitle:userLogin.jobtitle
                    }
                    res.json({"status":true,"message":"Login Successfully",data:data});
                }else{
                    res.json({"status":false,"message":"Invalid Login"})
                }      
                
            }else{
                res.json({"status":false,"message":"Something went wrong please try again"})

            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    async getUserList(req,res){
        try{
            let getUser = await employeeDb.find({ })
            console.log('EMP------------',getUser)
            // return false;
            if(getUser){
                res.json({"status":true,"message":"Successfully fetched the employee list",data:getUser})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async viewEntry(req,res){
        try{
            let getUser = await entryDb.find({"userId":req.body.userId })
            console.log('EMP------------',getUser)
            // return false;
            if(getUser){
                res.json({"status":true,"message":"Successfully fetched the Entry list",data:getUser})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async viewOrder(req,res){
        try{
            let getUser = await orderDb.find({"userId":req.body.userId,"entryId":req.body.entryId })
            console.log('EMP------------',getUser)
            // return false;
            if(getUser){
                res.json({"status":true,"message":"Successfully fetched the Order list",data:getUser})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async viewReports(req,res){
        try{
            console.log("reports")
            let getUser= await orderDb.aggregate([
                { $lookup:
                    {
                       from: "Employee",
                       localField: "userId",
                       foreignField: "_id",
                       as: "userlist"
                    }
                }
            ])
              console.log(getUser,'--')
            if(getUser){
                res.json({"status":true,"message":"Successfully fetched the Order list",data:getUser})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            console.log(err)
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async deleteReports(req,res){
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
    async assignTask(req,res){
        try{
            let getTaskData =req.body
            if(getTaskData){
                let obj={
                    "empId": req.body.empId,
                    "customer":req.body.customer,
                    "area":req.body.area,
                    "latitude":req.body.latitude,
                    "longitude":req.body.longitude,
                    "start":req.body.start,
                    "end":req.body.end,

                }
                    let taskCreate =await taskDb.create(obj);
                    console.log(taskCreate)
                    if(taskCreate){
                        res.json({"status":true,"message":"Task Created Successfully",data:taskCreate});

                    }else{
                        res.json({"status":false,"message":"Failed to create Task"});

                    }
                
            }else{
                res.json({"status":false,"message":"Error"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async updateTask(req,res){
        try{
            let getValue =req.body;
            if(getValue){   
            let updateServiceDet = await taskDb.updateOne({"_id":req.body._id},{$set:getValue});
            // console.log(updateServiceDet)
            res.json({"status":true,"message":"Task Updated successfully"});
            }else{
                res.json({"status":false,"message":"Task not Updated"});
            }

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"});
        }
    },
    async getTask(req,res){
        try{
            let getUser= await taskDb.aggregate([
                { $lookup:
                    {
                       from: "Employee",
                       localField: "empId",
                       foreignField: "_id",
                       as: "userlist"
                    }
                }
            ])
              console.log(getUser,'--')
            if(getUser){
                res.json({"status":true,"message":"Successfully fetched the Task list",data:getUser})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async deleteTask(req,res){
        try{
            console.log('yrrr',req.body)
            // return false;
            let deleteEmp = await taskDb.deleteOne({"_id":req.body.id});
            console.log(deleteEmp)
            res.json({"status":true,"message":"Employee Deleted successfully"})

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    
    async viewTaskCustomer(req,res){
        try{
            let getTaskEmployee = await taskDb.find({empId:req.body.empId })
            console.log(getTaskEmployee,'employeeeList')
            // return false;
            if(getTaskEmployee){
                res.json({"status":true,"message":"Successfully fetched the Task of particular employee",data:getTaskEmployee})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
}
module.exports=userController;