import { Request, Response } from 'express'
import User from '../models/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateActiveToken, generateAcceptToken, generateRefreshToken } from '../config/generateToken'


const authCtrl = {
    register: async (req: Request, res: Response) => {
        try {
            const { name, account, password } = req.body
            const user = await User.findOne({ account });
            if (user) {
                return res.status(400).json({ msg: "User already exist." })
            };
            const hashPass = await bcrypt.hash(password, 12)
            const newUser = {
                name,
                account,
                password: hashPass
            }

            const active_token = generateActiveToken({ newUser });



            res.json({
                status: 'OK',
                msg: 'Register successfully.',
                data: newUser,
                active_token
            })
        } catch (err) {
            return res.status(500).json(err)
        }
    }


}




export default authCtrl;