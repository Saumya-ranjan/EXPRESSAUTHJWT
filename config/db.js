import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS = {
            dbName:"EXPRESSAUTH",
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("Database connected"); // remove in Production
    }catch(err){
        console.log(err);
    }
}

export default connectDb;