const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
// app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("index");
  // res.sendFile("./views/index.html", { root: __dirname });
  // res.sendFile("./public/index.html", { root: __dirname });
});

// 404 page
app.use((req, res) => {
  // res.status(404).render("404", { title: "404" });
  res.sendFile("./views/404.html", { root: __dirname });
});
