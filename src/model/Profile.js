const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const data = await db.get(`SELECT * FROM profile`);

    await db.close();

    return {
      name: data.name,
      avatar: data.avatar,
      "monthly-budget": data.monthly_budget,
      "days-per-week": data.days_per_week,
      "hours-per-day": data.hours_per_day,
      "vacation-per-year": data.vacation_per_year,
      "value-hour": data.value_hour,
    };
  },
  async update(newDate) {
    const db = await Database();

    db.run(`UPDATE profile SET 
    name = "${newDate.name}",
    avatar = "${newDate.avatar}",
    "monthly_budget" = ${newDate["monthly-budget"]},
    "days_per_week" = ${newDate["days-per-week"]} ,
    "hours_per_day" = ${newDate["hours-per-day"]},
    "vacation_per_year" = ${newDate["vacation-per-year"]},
    "value_hour" = ${newDate["value-hour"]} 
  
    
    `);

    await db.close();
  },
};
