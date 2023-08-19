const mongoose =require("mongoose");

const userSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    emailID:String,
    password:String,
    type:String,
    comapny_name: String,
});

const userCollection = mongoose.model("users", userSchema);

module.exports={
    create:(fields, res)=>{
        const user=new userCollection(fields);
        return user.save()
        .then((data) => {
            return res.save({status:"ok", msg:"user account successfully created"});
        }).catch((err) => {
            return res.send({status:"fail", error: err});
        });
    }
}