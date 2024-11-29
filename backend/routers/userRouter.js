const express=require('express')
const {getUsers,login,addUser,updateUser, deleteUser}=require('../controllers/userController.js')

const userRouter=express.Router()

//https://localhost:3000/users
userRouter.get('/',getUsers)


//https:localhost:3000/users/login
userRouter.post('/login',login)


//POST- https://localhost:3000/users
userRouter.post('/',addUser)


//https:localhost:3000/users/login
userRouter.patch('/:id',updateUser)


userRouter.delete('/:id',deleteUser)


module.exports=userRouter
