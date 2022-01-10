const express = require("express");
const routes = express.Router();

const profile = {
  name: "Hugo Alves Varella",
  avatar: "https://avatars.githubusercontent.com/u/71407198?v=4",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 6,
  "vacation-per-year": 4,
};

routes.get("/", (req, res) => res.render("index"));
routes.get("/job", (req, res) => res.render("job"));
routes.get("/job/edit", (req, res) => res.render("job-edit"));
routes.get("/profile", (req, res) => res.render("profile", { profile }));

module.exports = routes;
