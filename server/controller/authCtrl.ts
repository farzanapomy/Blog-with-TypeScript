import { Request, Response } from 'express'
import User from '../models/userModel'
import bcrypt from 'bcrypt'
  import jwt from 'jsonwebtoken'



const authCtrl = {
    register: async (req: Request, res: Response) => {
        try {
            const { name, account, password } = req.body
            const user = await User.findOne({ account });
            if (user) {
                return res.status(400).json({ msg: "User already exist." })
            };
            const newUser = new User({
                name,
                account,
                password
            })
            res.json({
                status: 'OK',
                msg: 'Register successfully.',
                data: newUser,
            })
        } catch (err) {
            return res.status(500).json(err)
        }
    }


}




export default authCtrl;