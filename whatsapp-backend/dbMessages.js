import mongoose from 'mongoose'

const whatappSchema = mongoose.Schema({
    message: String,
    name:String,
    timestamp: String,
    received: Boolean,
});
//collection in server
export default mongoose.model("messagecontents", whatappSchema)