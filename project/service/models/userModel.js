const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    password: String,
    type: String,
    companyName: String,
});


const userCollection=mongoose.model("users",userSchema);

module.exports={
    create: (fields,res)=>{
        const user=new userCollection(fields);
        // return status of execution
        return user.save()

        // if success
        .then((data)=>{
        return res.send({status: "ok",msg:"user created"});
        })

        // if fails
        .catch((err)=>{
            return res.send({status: "fail",error: err});
            })

    }
}