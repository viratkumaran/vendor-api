const mongoose = require('mongoose');
const serviceDb = mongoose.model("Service");
const areaDb = mongoose.model("Area");
const employeeDb = mongoose.model("Employee");

const serviceController = {
    async serviceCreation(req,res){
        try{
            let getserviceData =req.body
            console.log('test',getserviceData)
        if(getserviceData){
            let obj={
                "name":req.body.name,
                "area": req.body.area,
                "address": req.body.address,
                "under": req.body.under,
                "product":req.body.product,
                "customerno":req.body.customerno,
                "alternateno":req.body.alternateno,
                "person":req.body.person,
                "email":req.body.email,
                "website":req.body.website,
                "gst":req.body.gst,
                "certificate":req.body.certificate,
                "photo":req.body.photo,
                "remark":req.body.remark,
                "latitude":req.body.latitude,
                "longitude":req.body.longitude,
                "empId":req.body.empId
            }
            let servicedetailsCreate =await serviceDb.create(obj);
            if(servicedetailsCreate){
                res.json({"status":true,"message":"Service Created Successfully",data:servicedetailsCreate});

            }else{
                res.json({"status":false,"message":"Failed to create service"});
            }
        }else{
            res.json({"status":false,"message":"Error"})
        }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async getService(req,res){
        try{
            let getServicedet = await serviceDb.find({ })
            // return false;
            if(getServicedet){
                res.json({"status":true,"message":"Successfully fetched the service list",data:getServicedet})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async updateService(req,res){
        try{
            let getValue =req.body;
            if(getValue){   
            let updateServiceDet = await serviceDb.updateOne({"_id":req.body.id},{$set:getValue});
            // console.log(updateServiceDet)
            res.json({"status":true,"message":"Service Updated successfully"});
            }else{
                res.json({"status":false,"message":"Service not Updated"});
            }

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"});
        }
    },
    async deleteService(req,res){
        try{
            console.log('yrrr',req.body)
            let getSer = req.body
            if(getSer){
                let deleteServiceDet = await serviceDb.deleteOne({"_id":req.body.id});
                console.log(deleteServiceDet)
                res.json({"status":true,"message":"Service Deleted successfully"});
            }else{
                res.json({"status":false,"message":"Service not deleted"});
            }
            
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    async getAreaList(req,res){
        try{
            let getServicedet = await areaDb.find({ })
            // return false;
            if(getServicedet){
                res.json({"status":true,"message":"Successfully fetched the Area list",data:getServicedet})
            }
            else{
                res.json({"status":false,"message":"Invalid response"})
            }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
        
    },
    async createArea(req,res){
        try{
            let getserviceData =req.body
            console.log('test',getserviceData)
        if(getserviceData){
            let obj={
                "areaName": req.body.areaName,
                "desc":req.body.desc

            }
            let productCreate =await areaDb.create(obj);
            if(productCreate){
                res.json({"status":true,"message":"Area Created Successfully"});

            }else{
                res.json({"status":false,"message":"Failed to create Area"});

            }
        }else{
            res.json({"status":false,"message":"Error"})
        }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async updateArea(req,res){
        try{
            let getValue =req.body;
            if(getValue){   
            let updateServiceDet = await areaDb.updateOne({"_id":req.body._id},{$set:getValue});
            // console.log(updateServiceDet)
            res.json({"status":true,"message":"Area Updated successfully"});
            }else{
                res.json({"status":false,"message":"Area not Updated"});
            }

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"});
        }
    },
    async deleteArea(req,res){
        try{
            console.log('yrrr',req.body)
            let getSer = req.body
            if(getSer){
                let deleteServiceDet = await areaDb.deleteOne({"_id":req.body.id});
                console.log(deleteServiceDet)
                res.json({"status":true,"message":"Area Deleted successfully"});
            }else{
                res.json({"status":false,"message":"Area not deleted"});
            }
            
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    async selectAreaCustomer(req,res){
        try{
            let getServicedet = await serviceDb.find({area:req.body.area })
            console.log(getServicedet)
            res.json({"status":true,"data":getServicedet})

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})

        }
    },
    async deleteMultiService(req,res){
        try{
            console.log('yrrr',req.body.body._id)
            // return false;
            let deleteEmp = await serviceDb.deleteMany({"_id":req.body.body._id});
            console.log(deleteEmp)
            res.json({"status":true,"message":"Service Deleted successfully"})

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },
    async deleteMultiArea(req,res){
        try{
            console.log('yrrr',req.body.body._id)
            // return false;
            let deleteEmp = await areaDb.deleteMany({"_id":req.body.body._id});
            console.log(deleteEmp)
            res.json({"status":true,"message":"Area Deleted successfully"})

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },

}
module.exports=serviceController;