import express from "express";
import ejs from "ejs";

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => res.render("contact.ejs"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
