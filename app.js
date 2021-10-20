require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDatabase = require("./db/connect");
const sleepRoute = require("./routes/sleeps");
const errorMiddleware = require("./middleware/error_middleware");
const notFoundMiddleware = require("./middleware/not_found_middleware");

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
// route
app.get("/", (req, res) => {
  res.send("<h1>Euy</h1>");
});
app.use("/api/v1/sleep", sleepRoute);

app.use(errorMiddleware);
app.use(notFoundMiddleware);

const startServer = async () => {
  try {
    await connectDatabase(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Listening on ${port}...`);
      console.log("Connected to the Database!");
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
