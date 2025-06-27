///password for cluster:FVPIKc3ypDudOFKi
import mongoose, { mongo } from "mongoose";
const url='mongodb+srv://mahendrakanchu2003:apmAL1aJHLDUTERI@cluster0.ssoz1kt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
let a=10;
const connect = async() => {
   mongoose.connect(url)
   .then(()=> {
    console.log("connected to database")
   })
   .catch((error) => {
    console.log("error connecting to database")
   })
};

export default connect;
