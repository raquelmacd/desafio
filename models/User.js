import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true]
    },
    password:{
        type:String,
        required: [true]
    },
    token:{
        type: String
    }

})

export default mongoose.models.User || mongoose.model('User', UserSchema)