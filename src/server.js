const express = require("express");
const routes = require("./routes");
const path = require("path");

const app = express();

app.use(express.urlencoded());

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(routes);

app.listen(3333, () => console.log("Servidor rodando!"));
