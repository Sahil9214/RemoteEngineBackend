const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { DeveloperRouter } = require("./routes/Developer.routes");
const { clientRouter } = require("./routes/Client.routes");
const { isAuth } = require("./Middleware/auth.Middleware");

const app = express();



app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/developers", isAuth, DeveloperRouter);
app.use("/api/clients", clientRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
