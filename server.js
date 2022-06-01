var createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
const router = express.Router();
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const config = require("./config");

app.use(
  cors({
    origin: "*",
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require('./routes/api')(router);

app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine(".html", require("ejs").renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', router);

//** For Test */
// app.get("/", function (req, res) {
//   res.render("index.ejs");
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

try {
  // DB Connect
  mongoose.connect(
    `${config.dbConnectionUrl}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (d) => {
      if (d)
        return console.log(
          `ERROR CONNECTING TO DB ${config.dbConnectionUrl}`,
          d
        );
      console.log(
        `Connected to ${process.env.NODE_ENV} database: `,
        `${config.dbConnectionUrl}`
      );
    }
  );
} catch (err) {
  console.log("DBCONNECT ERROR", err);
}

module.exports = app;
