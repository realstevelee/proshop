import express from 'express'
import asnycHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'


//  @desc Fech all products
//  @route GET /api/products
//  @access Public
router.get('/', asnycHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))


//  @desc Fech single  products
//  @route GET /api/products/:id
//  @access Public
router.get('/:id', asnycHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }

}))



export default router