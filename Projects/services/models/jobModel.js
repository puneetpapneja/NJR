const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    maxSalary: String
});

const jobCollection = mongoose.model("Job",jobSchema);

module.exports={
    create:(feilds)=>{
        const user = new jobCollection(feilds);
        return user.save();
    },
    getAll:()=>jobCollection.find(),
    getById:(id)=>jobCollection.find({_id:id}),
    deleteById: (id)=>jobCollection.deleteOne({_id:id}),
    update: (id,fields)=>jobCollection.updateOne({_id:id},fields)
}
