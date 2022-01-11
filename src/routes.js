const express = require("express");
const routes = express.Router();

const profile = {
  name: "Hugo Alves Varella",
  avatar: "https://github.com/Hugovarellaa.png",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 6,
  "vacation-per-year": 4,
};

const jobs = [];

routes.get("/", (req, res) => res.render("index"));

routes.get("/job", (req, res) => res.render("job"));

routes.post("/job", (req, res) => {
  const job = req.body;
  const date = (job.createAt = Date.now());

  jobs.push(job);
  return res.redirect("/");
});

routes.get("/job/edit", (req, res) => res.render("job-edit"));

routes.get("/profile", (req, res) => res.render("profile", { profile }));

module.exports = routes;
