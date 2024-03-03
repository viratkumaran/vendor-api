const mongoose = require('mongoose');
const serviceDb = mongoose.model("Service");
const producteDb = mongoose.model("Product");
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
                "longitude":req.body.longitude
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
    async getProductList(req,res){
        try{
            let getServicedet = await producteDb.find({ })
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
    async createProduct(req,res){
        try{
            let getserviceData =req.body
            console.log('test',getserviceData)
        if(getserviceData){
            let obj={
                "product": req.body.product,
                "price":req.body.price,
                "desc":req.body.desc

            }
            let productCreate =await producteDb.create(obj);
            if(productCreate){
                res.json({"status":true,"message":"Product Created Successfully"});

            }else{
                res.json({"status":false,"message":"Failed to create Product"});

            }
        }else{
            res.json({"status":false,"message":"Error"})
        }
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
        
    },
    async updateProduct(req,res){
        try{
            let getValue =req.body;
            if(getValue){   
            let updateServiceDet = await producteDb.updateOne({"_id":req.body._id},{$set:getValue});
            // console.log(updateServiceDet)
            res.json({"status":true,"message":"Product Updated successfully"});
            }else{
                res.json({"status":false,"message":"Product not Updated"});
            }

        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"});
        }
    },
    async deleteProduct(req,res){
        try{
            console.log('yrrr',req.body)
            let getSer = req.body
            if(getSer){
                let deleteServiceDet = await producteDb.deleteOne({"_id":req.body.id});
                console.log(deleteServiceDet)
                res.json({"status":true,"message":"Product Deleted successfully"});
            }else{
                res.json({"status":false,"message":"Product not deleted"});
            }
            
        }catch(err){
            res.json({"status":false,"message":"Something went wrong please try again"})
        }
    },

}
module.exports=serviceController;