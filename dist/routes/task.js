"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controlers/task");

var router = (0, _express.Router)();
router.get("/task", _task.getTask);
router.get("/task/count", _task.getTaskCount);
router.get("/task/:id", _task.getSingleTask);
router.post("/task", _task.saveTask);
router["delete"]("/task/:id", _task.deleteTask);
router.put("/task/:id", _task.updateTask);
var _default = router;
exports["default"] = _default;