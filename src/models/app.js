const express = require("express");
const app = express();
const path = require("path");
require("../db/conn");
const hbs = require("hbs");
const Register = require("../models/register");
const port = process.env.PORT || 3000;
const path_url = path.join(__dirname, "../", "../", "public");
const views_url = path.join(__dirname, "../", "../", "templates", "views");
const partials_url = path.join(__dirname, "../../templates/partials");
console.log(partials_url);
console.log(path_url);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path_url));
app.set("view engine", "hbs");
app.set("views", views_url);
hbs.registerPartials(partials_url);

app.get("/register", (req, res) => {
  //   res.send("Hello from the backend");
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    // console.log(req.body.firstname);
    // res.send(req.body.firstname);
    const password = req.body.password;
    const cpassword = req.body.copassword;
    console.log(password);
    console.log(cpassword);
    if (password === cpassword) {
      const registerEmployee = new Register({
        firstname: req.body.firstname,
        email: req.body.email,
        retypeemail: req.body.retypeemail,
        password: req.body.password,
        copassword: req.body.copassword,
      });
      const registered = await registerEmployee.save();
      res.status(201).render(index);
    } else {
      res.send("password is not match");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log(`servasdfeyr is runing this port number ${port}`);
});
