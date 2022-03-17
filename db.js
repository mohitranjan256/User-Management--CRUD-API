const mongoose=require('mongoose');

const atlasURL =process.env.ATLAS_URL;
const connectTOMongo=async()=>{
    mongoose.connect(atlasURL,()=>{
        console.log("Connected to MongoDB");
    })
}
module.exports=connectTOMongo;
