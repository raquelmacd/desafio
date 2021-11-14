import dbConnect from '../../../lib/dbConnect'
import Conector from '../../../models/Conector'
import User from '../../../models/User'
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  const { method } = req
  var token = req.headers.authorization
  const SECRET_KEY = process.env.JWT_KEY;
  token = token.replace("Bearer ","")
try{
  const userToken = await jwt.verify(token,SECRET_KEY)
  const userLogged = await User.find({email: userToken.email})
  
  if(userLogged){
 
    await dbConnect()


    switch (method) {
      case 'GET':
        try {
          if(req.body){
            const conectoresFilter = await Conector.find(req.body).where({status:true}) /* find all the data in our database */
            if (conectoresFilter === null) {
                return res.status(400).json({ success: false, message: "Nenhum conector encontrado" })
              }
            res.status(200).json({ success: true, data: conectoresFilter })
          }
          const conectores = await Conector.find({ status: true}) /* find all the data in our database */
          res.status(200).json({ success: true, data: conectores })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          const conector = await Conector.create(
            req.body
          ) /* create a new model in the database */
          res.status(201).json({ success: true, message: "Cadastro realizado com sucesso", data: conector })
        } catch (error) {
          res.status(400).json({ success: false  , message: error.message })
        }
        break
      default:
        res.status(403).json({ success: false , message: "Método não permitido"})
        break
    }

  }
}
catch(err){
  res.status(400).json({ success: false , message: "Token Missing"})
}

 
}
