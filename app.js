const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const Web = require("./models/web");
const bodyParser = require("body-parser");
const Feedback = require("./models/feedback");

const dbURI =
  "mongodb://kelompok6:EgT71JLF9jKvM9CQ@cluster0-shard-00-00.hjz0a.mongodb.net:27017,cluster0-shard-00-01.hjz0a.mongodb.net:27017,cluster0-shard-00-02.hjz0a.mongodb.net:27017/data?ssl=true&replicaSet=atlas-6ttlwn-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));
app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/add-test", (req, res) => {
  const web = new Web({
    name: "budi",
    coupleName: "ani",
    email: "michael.2001@gmail.com",
    date: "2001-12-20",
  });

  web
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/daftar", (req, res) => {
  const web = new Web(req.body);

  web
    .save()
    .then((result) => {
      res.redirect("thankyou");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/contactus", (req, res) => {
  const feedback = new Feedback(req.body);
  feedback
    .save()
    .then((result) => {
      res.redirect("home");
    })

    .catch((err) => {
      console.log(err);
    });
});

app.get("", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/contactus", (req, res) => {
  res.render("contactus");
});

app.get("/daftar-awesome", (req, res) => {
  res.render("daftar");
});

app.get("/daftar-awesomeplus", (req, res) => {
  res.render("daftarA");
});

app.get("/daftar-premium", (req, res) => {
  res.render("daftarB");
});

app.get("/dekorasi", (req, res) => {
  res.render("dekorasi");
});

app.get("/galeri", (req, res) => {
  res.render("galeri");
});

app.get("/price", (req, res) => {
  res.render("price");
});

app.get("/servis", (req, res) => {
  res.render("servis");
});

app.get("/teams", (req, res) => {
  res.render("teams");
});

app.get("/testimoni", (req, res) => {
  res.render("testimoni");
});

app.get("/thankyou", (req, res) => {
  res.render("thankyou");
});

app.get("/orders", async (req, res) => {
  const data = await Web.find();
  res.render("orders", {
    data,
  });
});

app.listen(port, () => console.info(`Listening on port ${port}`));
