const Profile = require("../model/Profile");

module.exports = {
  async index(req, res) {
    return res.render("profile", { profile: await Profile.get() });
  },
  async update(req, res) {
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

    const profile = await Profile.get();

    await Profile.update({
      ...profile,
      ...req.body,
      "value-hour": valueHour,
    });

    return res.redirect("/profile");
  },
};
