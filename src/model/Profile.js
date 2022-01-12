let data = {
  name: "Hugo Alves Varella",
  avatar: "https://github.com/Hugovarellaa.png",
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 6,
  "vacation-per-year": 4,
  "value-hour": 75,
};

module.exports = {
  get() {
    return data;
  },
  update(newDate) {
    data = newDate;
  },
};
