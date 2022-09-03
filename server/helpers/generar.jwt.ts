import { rejects } from 'assert'
import jwt from 'jsonwebtoken'
import { resolve } from 'path'

// uid: identificador único del usuario

export const generarJWT = ( uid = '' ) => {

    return new Promise((resolve, reject) => {
        
        const payload = { uid };

        jwt.sign(payload, process.env.JWT_SECRET || "", {
            expiresIn: '4h'
        }, (Error, token) =>{
            if(Error) {
                console.log(Error);
                reject('Nose pudo generar el Token')
            }else{
                resolve(token);
            }
        } )

    })

}