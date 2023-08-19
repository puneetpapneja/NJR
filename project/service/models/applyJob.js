const mongoose=require('mongoose')

const apply=mongoose.Schema(
    {
        typeofjob: String,
        nameofcompany:String,
        salary: String
    }
)

const applyrcd= mongoose.model("apply",apply)

module.exports={
    applied:(field)=>{
        const applied = new applyrcd(field)
        return applied.save()
    },
    getrcd:()=>applyrcd.find(),
    deleteById:(id)=>applyrcd.deleteOne({_id:id})

}