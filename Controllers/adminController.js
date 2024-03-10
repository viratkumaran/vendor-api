// const adminDb =require("./Model/Admin");
const mongoose = require('mongoose');
const adminDb = mongoose.model("Admin");

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
}
module.exports=adminController;