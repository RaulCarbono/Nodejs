const express = require("express");
const apiRouter = require("./server");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo desde mi ruta raíz");
});

apiRouter(app);

app.listen(port, (req, res) => {
  console.log(`Escuchando en el puerto ${port}`);
});
