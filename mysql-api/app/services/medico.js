const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, nombre, dni, telefono, especialidad 
    FROM medico LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(medico) {
  console.log(medico, "desde el create()");
  const result = await db.query(
    `INSERT INTO medico
    (nombre, dni, especialidad, telefono)
    VALUES
    ('${medico.nombre}', '${medico.dni}', '${medico.especialidad}', '${medico.telefono}')`
  );

  let message = "Error al agregar un medico";

  if (result.affectedRows) {
    message = "Medico creado exitosamente";
  }

  return { message };
}

async function update(id, medico) {
  const result = await db.query(
    `UPDATE medico 
    SET nombre='${medico.nombre}', dni='${medico.dni}', especialidad='${medico.especialidad}', 
    telefono='${medico.telefono}'
    WHERE id=${id}`
  );

  let message = "Error al actualizar medico";

  if (result.affectedRows) {
    message = "Medico actualizado exitosamente";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM medico WHERE id=${id}`);

  let message = "Error al eliminar un medico";

  if (result.affectedRows) {
    message = "Medico eliminado exitosamente";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
