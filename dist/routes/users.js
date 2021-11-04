"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Users = require("../controlers/Users");

var router = (0, _express.Router)();
/**
 * @swagger
 * /User:
 *  get:
 *    summary: Get all users
 */

router.get("/User", _Users.getUser);
/**
 * @swagger
 * /User/count:
 *  get:
 *    summary: Get user count
 */

router.get("/User/count", _Users.getUserCount);
/**
 * @swagger
 * /User/cedula:
 *  get:
 *    summary: Get single user
 */

router.get("/User/:cedula", _Users.getSingleUser);
/**
 * @swagger
 * /User:
 *  post:
 *    summary: save user into DB
 */

router.post("/User", _Users.saveUser);
/**
 * @swagger
 * /User/cedula:
 *  delete:
 *    summary: Delete user
 */

router["delete"]("/User/:cedula", _Users.deleteUser);
/**
 * @swagger
 * /User/cedula:
 *  put:
 *    summary: Update user
 */

router.put("/User/:cedula", _Users.updateUser);
var _default = router;
exports["default"] = _default;