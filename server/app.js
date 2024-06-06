const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require('dotenv').config()
const morgan = require("morgan")
const indexRouteApi = require("./routes/index.routes.api");

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", indexRouteApi);

app.listen(process.env.PORT, () => {
	console.log(`Веселый ларёк на ${process.env.PORT} порту`);
});

module.exports = app;