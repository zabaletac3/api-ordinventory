import {Router} from 'express';
import { comprobanteController } from '../controllers/comprobante.controller';
import { loginController } from '../controllers/login.controller';
import { comprobanteRouter } from './comprobante.routes';
import { employeesRoutes } from './employees.routes';
import { loginRouter } from './login.routes';
import { mainRouter } from './main.routes';
import { productsRouter } from './products.routes';
import { registerRouter } from './register.routes';
import { userRouter } from './user.routes';

export const appRouter = Router();

appRouter.use(mainRouter);
appRouter.use(userRouter);
appRouter.use(registerRouter);
appRouter.use(productsRouter);
appRouter.use(employeesRoutes);
appRouter.use(loginRouter);
appRouter.use(comprobanteRouter)


//appRouter.use(productRouter);
