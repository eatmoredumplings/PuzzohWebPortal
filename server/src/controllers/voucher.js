const db = require('../config/db');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const getVouchers = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("User is not logged in!")

  jwt.verify(token, "jwtSecretKey", (err, vendorInfo) => {
    if (err) return res.status(403).json("Invalid token!")

    db.query ("SELECT vou.* FROM vouchers AS vou JOIN vendors AS ven ON (ven.id = vou.vendorID) WHERE ven.id = ? ORDER BY vou.createDate DESC",
      [vendorInfo.id],
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    });
  });
}

const addVoucher = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("User is not logged in!")

  jwt.verify(token, "jwtSecretKey", (err, vendorInfo) => {
    if (err) return res.status(403).json("Invalid token!")

    db.query("INSERT INTO vouchers (`vendorID`, `title`, `description`, `category`, `priceBefore`, `priceAfter`, `maxRedeem`, `createDate`, `expireDate`) VALUES (?,?,?,?,?,?,?,?,?)",
      [vendorInfo.id, req.body.title, req.body.description, req.body.category, req.body.priceBefore, req.body.priceAfter,
      req.body.maxRedeem, moment(Date.now()).format("YYYY-MM-DD"), req.body.expireDate],
        (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json('Voucher has been created.')
        });
  });
}

const deleteVoucher = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("User is not logged in!")

  jwt.verify(token, "jwtSecretKey", (err, vendorInfo) => {
    db.query("DELETE from vouchers WHERE vendorID = ? AND id = ?",
      [vendorInfo.id, req.body.id],
      (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json('Voucher has been deleted.')
        });
      });
}

module.exports = { getVouchers, addVoucher, deleteVoucher }
