const express = require('express');
const { body, param } = require('express-validator');
const { getProducts, createProduct, restockProduct, sellProduct, createOrder } = require('./controllers');

const router = express.Router();

// Product routes
router.get('/products', getProducts);
router.post('/products', [
    body('name').isString().isLength({ max: 50 }),
    body('description').isString().isLength({ max: 50 }),
    body('price').isFloat({ min: 0 }),
    body('stock').isInt({ min: 0 })
], createProduct);

router.post('/products/:id/restock', [
    param('id').isMongoId(),
    body('stock').isInt({ min: 1 })
], restockProduct);

router.post('/products/:id/sell', [
    param('id').isMongoId(),
    body('quantity').isInt({ min: 1 })
], sellProduct);

// Order routes
router.post('/orders', [
    body('customerId').isString(),
    body('products').isArray()
], createOrder);

module.exports = router;
