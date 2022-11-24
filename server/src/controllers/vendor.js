const db = require('../config/db');

const getVouchers = (req, res) => {
  db.query("SELECT vou.* FROM vouchers AS vou JOIN vendors AS ven ON (ven.id = vou.vendorID)",
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data)
    })
}

module.exports = { getVouchers }
