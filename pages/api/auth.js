import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/User'
import dbConnect from '../../lib/dbConnect'

export default async (req, res) => {
  await dbConnect()
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({status: 'error',error: 'Requisição faltando dados email ou password'});
  }

  const user = await User.findOne({email: email})
  const KEY = process.env.JWT_KEY
  if (user) {
    const userId = user.id,
      userEmail = user.email,
      userPassword = user.password;
    /* Check and compare password */
    bcrypt.compare(password, userPassword).then(isMatch => {
      /* User matched */
      if (isMatch) {
        /* Create JWT Payload */
        const payload = {
          id: userId,
          email: userEmail
        };
        /* Sign token */
        jwt.sign(payload,KEY,{
            expiresIn: 31556926, // 1 year in seconds
          },
           (err, token) => {
            /* Send succes with token */
            res.status(200).json({success: true, token: token });
          },
        );

      } else {
        /* Send error with message */
        res.status(400).json({ status: 'error', error: 'Senha incorreta' });
      }
    });
  }
  else {
    /* Send error with message */
    res.status(400).json({ status: 'error', error: 'Usuário não encontrado' });
  }
};
