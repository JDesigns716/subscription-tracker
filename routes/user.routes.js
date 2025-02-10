import {Router} from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title: "GET all users"}));
userRouter.get('/:id', (req, res) => res.send({title: "GET all users"}));
userRouter.post('/', (req, res) => res.send({title: "GET user details"}));
userRouter.put('/', (req, res) => res.send({title: "CREATE new user"}));
userRouter.delete('/', (req, res) => res.send({title: "DELETE users"}));

export default userRouter;