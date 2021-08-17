const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const jwtCheck = require("./config/auth0");
const usersRouter = require("./routes/user");

dotenv.config({ path: "./config/config.env" });
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use(jwtCheck);
if(process.env.NODE_ENV === "development"){
	app.use(morgan("dev"));
}

//routes
app.use("/user", usersRouter);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
	console.log(
		`app is listening on port ${PORT} in ${process.env.NODE_ENV} mode`
	);
});
