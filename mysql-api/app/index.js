const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
const clinicaRouter = require("./routes/medico");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/mysql-api", clinicaRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Ejemplo de aplicacion escuchando en http://localhost:${port}`);
});
