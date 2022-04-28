const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.get('/',productController.findAll)
router.get('/:id',productController.findOne)
router.post('/',productController.createOne)
router.patch('/:id',productController.updateOne)
router.delete('/:id',productController.deleteOne)

module.exports = router