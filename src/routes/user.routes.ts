import { Router } from "express";
import { UserController } from "../resources/user/userControllers";

const userRouter = Router()
const userController = new UserController()

userRouter.post('/signin', userController.signin)

userRouter.post('/signup', userController.signup)

export default userRouter
