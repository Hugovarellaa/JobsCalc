const express = require("express");
const routes = express.Router();
routes.get("/", (req, res) => res.render("index"));
routes.get("/job", (req, res) => res.render("job"));
routes.get("/job/edit", (req, res) => res.render("job-edit"));
routes.get("/profile", (req, res) => res.render("profile"));

module.exports = routes;
