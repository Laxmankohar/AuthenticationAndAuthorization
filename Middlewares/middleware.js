import { jsonwebtoken } from "jsonwebtoken"

export const createToken = (id) =>{
    return jsonwebtoken.sign({id} , process.env.WEB_TOKEN,)
}