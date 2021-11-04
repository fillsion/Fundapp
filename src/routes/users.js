import { Router } from "express";
import {
  deleteUser,
  getSingleUser,
  getUser,
  getUserCount,
  saveUser,
  updateUser,
} from "../controlers/Users";
const router = Router();

/**
 * @swagger
 * /User:
 *  get:
 *    summary: Get all users
 */
router.get("/User", getUser);

/**
 * @swagger
 * /User/count:
 *  get:
 *    summary: Get user count
 */
router.get("/User/count", getUserCount);

/**
 * @swagger
 * /User/cedula:
 *  get:
 *    summary: Get single user
 */
router.get("/User/:cedula", getSingleUser);

/**
 * @swagger
 * /User:
 *  post:
 *    summary: save user into DB
 */
router.post("/User", saveUser);

/**
 * @swagger
 * /User/cedula:
 *  delete:
 *    summary: Delete user
 */
router.delete("/User/:cedula", deleteUser);

/**
 * @swagger
 * /User/cedula:
 *  put:
 *    summary: Update user
 */
router.put("/User/:cedula", updateUser);

export default router;
