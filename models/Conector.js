import mongoose from 'mongoose'

const ConectorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Envie o nome."]
    },
    type:{
        type:String,
        enum: ['REST','DB','SOAP'],
        required: [true, "Tipos permitidos REST,SOAP, BD."]
    },
    privacy:{
        type: String,
        enum: ['PUBLIC','PRIVATE'],
        required: [true, "Privacidade permitida PUBLIC,PRIVATE."]
    },
    base_url:{
        type:String,
        required: [true, "URL inválida"]
    },
    logo_url:{
        type:String,
        required: [true, "Link inválido"]
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:Boolean,
        default: true
    }

})

export default mongoose.models.Conector || mongoose.model('Conector', ConectorSchema)