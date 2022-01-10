const express = require("express");
const routes = express.Router();
const path = require("path");

const baseURL = path.resolve(__dirname, "views");

routes.get("/", (req, res) => res.sendFile(baseURL + "/index.html"));
routes.get("/job", (req, res) => res.sendFile(baseURL + "/job.html"));
routes.get("/job/edit", (req, res) => res.sendFile(baseURL + "/job-edit.html"));
routes.get("/profile", (req, res) => res.sendFile(baseURL + "/profile.html"));

module.exports = routes;
