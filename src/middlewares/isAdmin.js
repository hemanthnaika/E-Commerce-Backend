
import jwt from 'jsonwebtoken'

const isAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        const { role } = decodedToken

        if (role == 1) next()
        else return res.json({
            message: "UNAUTHORISED"
        })

    } else {
        return res.json({
            message: "UNAUTHORISED"
        })
    }
}

export default isAdmin