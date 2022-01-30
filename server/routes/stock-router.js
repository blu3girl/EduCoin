const express = require('express')

const StockCtrl = require('../controllers/stock-ctrl')

const router = express.Router()

router.post('/stock', StockCtrl.createStock)
router.delete('/stock/:id', StockCtrl.deleteStock)
router.get('/stock/:id', StockCtrl.getStockById)
router.get('/stocks', StockCtrl.getStocks)

module.exports = router