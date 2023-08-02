module.exports = function (app) {
  app.use("/api/employees", require("./api/employee"));
};
