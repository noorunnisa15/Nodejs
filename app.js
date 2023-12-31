var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// var usersRouter = require('./routes/users');
// var customersRouter = require('./routes/customersRouter');
// var productsRouter = require('./routes/productsRouter');
var userRouter = require("./routes/userRouter");
var productRouter = require("./routes/productsRouter");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/customers', customersRouter);
// app.use('/products', productsRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
