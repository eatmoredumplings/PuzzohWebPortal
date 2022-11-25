const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

 const signUp = (req, res) => {
    const vendorName = req.body.vendorName;
    const email = req.body.email;

    db.query("SELECT * FROM vendors WHERE email = ?", [email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("Email is already registered!")

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        db.query("INSERT INTO vendors (`email`, `password`, `vendorName`) VALUES (?,?,?)",
        [email, hashedPassword, vendorName],
        (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.")
        });
    });
};

 const logIn =  (req, res) => {
    const email = req.body.email

    db.query("SELECT * FROM vendors WHERE email = ?", [email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0 ) return res.status(404).json("User not found!")

        const validatePassword = bcrypt.compareSync(req.body.password, data[0].password)

        if (!validatePassword)
          return res.status(400).json("Incorrect password or username!")

        const token = jwt.sign({ id: data[0].id }, "jwtSecretKey")

        const { password, ...info } = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(info)
    });
};

const logOut = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("User has been logged out.")
};

module.exports = { signUp, logIn, logOut }
