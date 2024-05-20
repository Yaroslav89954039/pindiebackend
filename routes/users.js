const usersRouter = require("express").Router();
const {findAllUsers} = require('../middlewares/users');
const {sendAllUsers} = require('../controllers/users');
const {createUser} = require('../middlewares/users');
const {sendUserCreated} = require('../controllers/users');
const {findUserById} = require('../middlewares/users');
const {sendUserById} = require('../controllers/users');
const {updateUser} = require('../middlewares/users');
const {sendUserUpdated} = require('../controllers/users');
const {deleteUser} = require('../middlewares/users');
const {sendUserDeleted} = require('../controllers/users');
const {checkEmptyNameAndEmailAndPassword} = require('../middlewares/users');
const {checkEmptyNameAndEmail} = require('../middlewares/users');
const {checkIsUserExists} = require('../middlewares/users');
const {hashPassword} = require('../middlewares/users');
const { checkAuth } = require("../middlewares/auth.js");
const { sendMe } = require("../controllers/users.js");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  ); 
  usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
  ); 
  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
  