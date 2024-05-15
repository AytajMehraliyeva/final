const express=require('express')
const { userController } = require('../controller/User.controller')

const router=express.Router()

router.get('/', userController.getAll),
router.post('/login', userController.login),
router.post('/register', userController.register),
router.delete('/:id', userController.delete),
router.put('/:id', userController.edit)

module.exports=router