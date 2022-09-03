import {Request, Response} from 'express';

export const mainController = {

    getMain: (req: Request, res: Response) => {
        res.json({message: 'From getMain on mainController'});
    }

};
