import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.WEB_TOKEN)
}

export default createToken;