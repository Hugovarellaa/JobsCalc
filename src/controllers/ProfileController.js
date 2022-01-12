const Profile = require("../model/Profile");

module.exports = {
  index(req, res) {
    return res.render("profile", { profile: Profile.get() });
  },
  update(req, res) {
    //req.body para pega os dados
    const data = req.body;

    //Definir quantas semanas tem no ano: 52
    const weeksPerYear = 52;

    //Quantas semanas tem em 1 mes
    const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12;

    //Total de horas Trabalhanda por semana
    const weekTotalHours = data["hours-per-day"] * data["days-per-week"];

    //Horas trabalhanda por mes de
    const monthTotalHours = weekTotalHours * weeksPerMonth;

    //Valor será da minha hora
    const valueHour = data["monthly-budget"] / monthTotalHours;

    Profile.update({
      ...Profile.get(),
      ...req.body,
      "value-hour": valueHour,
    });

    return res.redirect("/profile");
  },
};
