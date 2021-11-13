import dbConnect from '../../../lib/dbConnect'
import Conector from '../../../models/Conector'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

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
        const conector = await Conector.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!conector) {
          return res.status(400).json({ success: false })
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
