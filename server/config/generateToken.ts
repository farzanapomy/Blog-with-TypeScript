import jwt from 'jsonwebtoken'

export const generateActiveToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SEC}`, { expiresIn: '5m' })
}

export const generateAcceptToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SEC}`, { expiresIn: '15m' })
}

export const generateRefreshToken = (payload: object) => {
    return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SEC}`, { expiresIn: '30d' })
}

