import { getConnection, sql, queries } from "../database";

export const getAllProps = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProps);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getProp = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("cod", sql.VarChar, req.params.propCod)
      .query(queries.getProp);
    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error, message);
  }
};

export const createProp = async (req, res) => {
  const {
    propCod,
    propNombre,
    propApellido,
    propEmail,
    propTelefono,
    propTipoDocumento,
    propDocumento,
    propFechaNac,
    propEdad,
  } = req.body;

  if (
    propCod == null ||
    propNombre == null ||
    propApellido == null ||
    propEdad == null ||
    propTelefono == null ||
    propEmail == null ||
    propFechaNac == null ||
    propEdad == null ||
    propTipoDocumento == null ||
    propDocumento == null
  ) {
    return res.status(400).json({ msj: "Bad Request. Please Fill All fields" });
  }

  try {
    const pool = await getConnection();
    pool
      .request()
      .input("cod", sql.VarChar, propCod)
      .input("nombre", sql.VarChar, propNombre)
      .input("apellido", sql.VarChar, propApellido)
      .input("email", sql.VarChar, propEmail)
      .input("telefono", sql.VarChar, propTelefono)
      .input("tipoDoc", sql.VarChar, propTipoDocumento)
      .input("documento", sql.VarChar, propDocumento)
      .input("fechaNac", sql.Date, propFechaNac)
      .input("edad", sql.Int, propEdad)
      .query(queries.createProp);

    res.json({
      propCod,
      propNombre,
      propApellido,
      propEmail,
      propTelefono,
      propTipoDocumento,
      propDocumento,
      propFechaNac,
      propEdad,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const delProp = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("cod", sql.VarChar, req.params.propCod)
      .query(queries.delProp);
    //de esta forma enviamos una respuesta vacia
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error, message);
  }
};

export const updateProp = async (req, res) => {
  const codProp = req.params.codProp;
  const {
    propNombre,
    propApellido,
    propEmail,
    propTelefono,
    propTipoDocumento,
    propDocumento,
    propFechaNac,
    propEdad,
  } = req.body;

  if (
    propCod == null ||
    propNombre == null ||
    propApellido == null ||
    propEdad == null ||
    propTelefono == null ||
    propEmail == null ||
    propFechaNac == null ||
    propEdad == null ||
    propTipoDocumento == null ||
    propDocumento == null
  ) {
    return res.status(400).json({ msj: "Bad Request. Please Fill All fields" });
  }

  try {
    const pool = await getConnection();
    pool
      .request()
      .input("cod", sql.VarChar, propCod)
      .input("nombre", sql.VarChar, propNombre)
      .input("apellido", sql.VarChar, propApellido)
      .input("email", sql.VarChar, propEmail)
      .input("telefono", sql.VarChar, propTelefono)
      .input("tipoDoc", sql.VarChar, propTipoDocumento)
      .input("documento", sql.VarChar, propDocumento)
      .input("fechaNac", sql.Date, propFechaNac)
      .input("edad", sql.Int, propEdad)
      .query(queries.updateProp);

    res.json({
      propCod,
      propNombre,
      propApellido,
      propEmail,
      propTelefono,
      propTipoDocumento,
      propDocumento,
      propFechaNac,
      propEdad,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const countProps = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.countProps);
    res.json(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
