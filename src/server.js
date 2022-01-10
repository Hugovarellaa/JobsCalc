const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.static("public"));
app.use(routes);

app.listen(3333, () => console.log("Servidor rodando!"));
