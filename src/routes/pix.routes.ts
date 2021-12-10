import { Router } from "express";
import userAuthenticated from "../middlewares/userAuthenticated";

const pixRouter = Router()
// const pixController = new UserController()

pixRouter.use(userAuthenticated)

// pixRouter.post('/signin', pixController.signin)
// pixRouter.post('/signup', pixController.signup)
// pixRouter.get('/signup', pixController.signup)


export default pixRouter
