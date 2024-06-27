import jwt from 'jsonwebtoken';

// used to cookie from request header
export const checkToken = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;

        if (!cookies) {
            return res.status(403).json({ message: "Login first" })
        }

        // extracting token from cookie
        const token = cookies.split("=")[1]

        if (!token) {
            return res.status(403).json({ message: "A token is required." })
        }

        else {
            // verifying token and decoding user iD from Id
            const decode = jwt.verify(token, process.env.WEB_TOKEN);
            req.userId = decode;
            next();
        }
    } catch (err) {
        return res.status(401).json({ message: "Error in the token checking", err })
    }
}