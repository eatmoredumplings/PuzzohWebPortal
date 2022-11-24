const express = require("express");
const router = express.Router();
const { getVouchers } = require('../controllers/vendor')

router.get('/vouchers', getVouchers)

module.exports = router;
