const pagesRouter = require("express").Router(); 
const { sendIndex } = require("../controllers/auth.js");
const { sendDashboard } = require("../controllers/auth.js");
const { checkCookiesJWT } = require("../middlewares/auth.js");
const { checkAuth } = require("../middlewares/auth.js");


pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 

module.exports = pagesRouter;