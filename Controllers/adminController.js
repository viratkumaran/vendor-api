// const adminDb =require("./Model/Admin");
const mongoose = require('mongoose');
const adminDb = mongoose.model("Admin");
const collectionDb = mongoose.model("Collectiondet");

const adminController = {

    async adminLogin(req,res){
        try{
            let getData = req.body;
            console.log(getData)
            if(getData){
                getData.email= (getData.email).toLowerCase();
                let adminLogin =await adminDb.findOne({email: getData.email, password:getData.password});
                if(adminLogin){
                    res.json({"status":true,"message":"Login Successfully"});
                }else{
                    res.json({"status":false,"message":"Invalid Login"})
                }
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    async createCollectionDet(req,res){
        try{
            let getEmpData =req.body
            if(getEmpData){
                console.log("testdata",getEmpData)
                
                let expensiveCreate =await collectionDb.create(getEmpData);
                if(expensiveCreate){
                    res.json({"status":true,"message":"Collection Created Successfully"});

                }else{
                    res.json({"status":false,"message":"Failed to create Collection"});

                }
            }else{
                res.json({"status":false,"message":"Error"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async getCollection(req,res){
        try{
            console.log("reports")
            let getUser= await collectionDb.aggregate([
                { $lookup:
                    {
                       from: "Employee",
                       localField: "empId",
                       foreignField: "_id",
                       as: "userlist"
                    }
                },
                {
                    $lookup:
                    {
                       from: "Service",
                       localField: "custId",
                       foreignField: "_id",
                       as: "customerlist"
                    }  
                },
                {
                    $lookup:
                    {
                       from: "Order",
                       localField: "ordId",
                       foreignField: "_id",
                       as: "Oderlist"
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
}
module.exports=adminController;