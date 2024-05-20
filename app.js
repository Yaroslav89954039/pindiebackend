const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/apiRouter");
const gamesRouter = require("./routes/games");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const app = express();

const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
bodyParser.json(),
pagesRouter,
apiRouter,
express.static(path.join(__dirname, "/public")),
usersRouter, 
  gamesRouter, 
  categoriesRouter
);

app.listen(PORT);