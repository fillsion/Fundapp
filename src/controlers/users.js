import { connect } from "../database";
export const getUser = async (req, res) => {
  let sql = "SELECT * FROM user";
  const connection = await connect();
  const [rows] = await connection.query(sql);
  console.log(rows);

  res.json(rows);
};

export const getSingleUser = async (req, res) => {
  let sql = "SELECT * FROM user WHERE cedula = ?";
  const connection = await connect();
  const [rows] = await connection.query(sql, [req.params.cedula]);
  res.json(rows[0]);
};
export const getUserCount = async (req, res) => {
  let sql = "SELECT count(*) FROM user";
  const connection = await connect();
  const [rows] = await connection.query(sql);
  res.json(rows[0]["count(*)"]);
};
export const saveUser = async (req, res) => {
  let sql =
    "INSERT INTO user(cedula, name, apellidos, celular, correo, codigoPostal, ciudad) VALUES (?,?,?,?,?,?,?)";
  const connection = await connect();
  const result = await connection.query(sql, [
    req.body.cedula,
    req.body.name,
    req.body.apellidos,
    req.body.celular,
    req.body.correo,
    req.body.codigoPostal,
    req.body.ciudad,
  ]);
  console.log(result);
  res.json({
    cedula: result.cedula,
    ...req.body,
  });
};
export const deleteUser = async (req, res) => {
  const connection = await connect();
  let sql = "DELETE FROM user WHERE cedula = ?";

  await connection.query(sql, [req.params.cedula]);
  res.sendStatus(204);
};
export const updateUser = async (req, res) => {
  const connection = await connect();
  let sql = "UPDATE user SET ? WHERE cedula = ?";
  const result = await connection.query(sql, [req.body, req.params.cedula]);
  res.sendStatus(204);
};
