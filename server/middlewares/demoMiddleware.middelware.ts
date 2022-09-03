import {Request, Response, NextFunction} from 'express';

export const demoMiddleware = {

    messageMiddleware: (req: Request, res: Response, next: NextFunction) => {
        const productCod = +req.params.cod;
        if(productCod == 3) return next();
        return res.json({
            ok: false,
            message: 'Solo están permitidos los cod. 3'
        });
    },

}