const express = require("express");
const router = express.Router();
const { getVouchers, addVoucher } = require('../controllers/voucher')

router.get('/vouchers', getVouchers)
router.post('/voucher', addVoucher)

module.exports = router;
