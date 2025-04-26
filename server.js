const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");

dotenv.config();

//database call
connectDB();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));

//transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

//port
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
