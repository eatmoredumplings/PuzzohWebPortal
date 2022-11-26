const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const authRoutes = require('./src/routes/authRoutes');
const vendorRoutes = require('./src/routes/vendorRoutes');
const voucherRoutes = require('./src/routes/voucherRoutes');
dotenv.config();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
})
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*"
}));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/user", vendorRoutes);
app.use("/api", voucherRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
