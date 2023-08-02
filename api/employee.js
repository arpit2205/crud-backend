var express = require("express");
var router = express.Router();

const { Employee } = require("../models/Employee");

// fetch all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.findAll();
    employees.forEach((e) => console.log(e.toJSON()));
    res.status(200).json({ data: employees });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// create employee
router.post("/add", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contact = req.body.contact;
  const department = req.body.department;
  const gender = req.body.gender;

  try {
    const employee = await Employee.create({
      firstName,
      lastName,
      gender,
      department,
      contact,
      email,
    });
    res.status(200).json({ data: employee });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
