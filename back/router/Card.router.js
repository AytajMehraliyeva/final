const express=require('express')
const { cardController } = require('../controller/Card.controller')

const router=express.Router()

router.get("/", cardController.getAll)
router.get('/:id', cardController.getById)
router.post('/', cardController.add)
router.delete('/:id', cardController.delete)

module.exports=router