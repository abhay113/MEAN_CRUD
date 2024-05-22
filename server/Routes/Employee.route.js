const express = require("express");

const app = express();
const employeeRoute = express.Router();

let employeeModel = require("../Model/Employee");

employeeRoute.get("/", async (req, res) => {
  const employees = await employeeModel.find();
  res.json(employees);
});

employeeRoute.post("/addEmployee", (req, res) => {
  let employee = new employeeModel(req.body);
  employee
    .save()
    .then((game) => {
      res.status(200).json({ employee: "Employee added Successfully" });
    })
    .catch((err) => {
      res.status(400).send("something went wrong");
    });
});

employeeRoute.get("/editEmployee/:id", async (req, res) => {
  let id = req.params.id;
  let employee = await employeeModel.findById(id);
  res.json(employee);
});

employeeRoute.post("/updateEmployee/:id", async (req, res) => {
  let id = req.params.id;
  let employee = await employeeModel.findById(id);

  if (!employee) {
    console.log("employee not found");
  } else {
    employee.firstName = req.body.firstName;

    employee.lastName = req.body.lastName;
    employee.age = req.body.age;
    employee.salary = req.body.salary;
    employee.department = req.body.department;

    employee
      .save()
      .then((emp) => {
        res.json("Employee Updated Successfully");
      })
      .catch((err) => {
        res.status(400).send("Unable To Update Employee");
      });
  }
});

employeeRoute.get("/deleteEmployee/:id", async (req, res) => {
  let employee = employeeModel.findByIdAndDelete({ _id: req.params.id });
  res.json("Employee Deleted Successfully");
});

module.exports = employeeRoute;
