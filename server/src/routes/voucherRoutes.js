const express = require("express");
const router = express.Router();
const { getVouchers, addVoucher, deleteVoucher } = require('../controllers/voucher')

router.get('/vouchers', getVouchers)
router.post('/voucher', addVoucher)
router.delete('/voucher/:id', deleteVoucher)

module.exports = router;
