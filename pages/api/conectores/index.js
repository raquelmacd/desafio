import dbConnect from '../../../lib/dbConnect'
import Conector from '../../../models/Conector'
import { verifyToken } from '../../../lib/utils'


export default async function handler(req, res) {
  const { method } = req

  await dbConnect()
  const SECRET_KEY = process.env.JWT_KEY;
  const URLtoken = req.headers.authorization

  console.log(URLtoken)

  switch (method) {
    case 'GET':
      try {
        if(req.body){
          const conectoresFilter = await Conector.find(req.body).where({status:true}) /* find all the data in our database */
          if (conectoresFilter === null) {
              return res.status(400).json({ filters: req.body,success: false, message: "Nenhum conector encontrado" })
            }
          res.status(200).json({ filters: req.body,success: true, data: conectoresFilter })
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
      res.status(405).json({ success: false , message: "Método não permitido"})
      break
  }

}
