import dbConnect from '../../../lib/dbConnect'
import Conector from '../../../models/Conector'
import User from '../../../models/User'
import jwt from 'jsonwebtoken'


export  default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req
  var token = req.headers.authorization
  const SECRET_KEY = process.env.JWT_KEY;
  token = token.replace("Bearer ","")
  try{
    const userToken = await jwt.verify(token,SECRET_KEY)
    const userLogged = await User.find({email: userToken.email})
    
    if(userLogged){
      await dbConnect()
      
      switch (method) {
        case 'GET' /* Get a model by its ID */:
          try {
            const conector = await Conector.find({ _id: id, status: true})
            if (!conector) {
              return res.status(400).json({ success: false, message: "Nenhum conector encontrado" })
            }
            res.status(200).json({ success: true, data: conector })
          } catch (error) {
            res.status(400).json({ success: false, message: "Conector com código inválido" })
          }
          break

        case 'PUT' /* Edit a model by its ID */:
          try {
            const conector = await Conector.findOneAndUpdate({ _id: id, status: true}, req.body, {
              new: true,
              runValidators: true
            })
            if (!conector) {
              return res.status(400).json({ success: false, message: "Conector inválido" })
            }
            res.status(200).json({ success: true, data: conector })
          } catch (error) {
            res.status(400).json({ success: false, message: error.message })
          }
          break

        case 'DELETE' /* Delete a model by its ID */:
          try {
            const deletedConector = await Conector.findByIdAndUpdate(id, { status : false})
            if (!deletedConector) {
              return res.status(400).json({ success: false })
            }
            res.status(200).json({ success: true, data: {message : "Cadastro excluído"} })
          } catch (error) {
            res.status(400).json({ success: false , message: error.message})
          }
          break

        default:
          res.status(400).json({ success: false , message: "Método não permitido"})
          break
      }
    }
  }catch(err){
    res.status(400).json({ success: false , message: "Token Missing"})
  }
}
