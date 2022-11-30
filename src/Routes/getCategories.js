const { Router } = require("express");
const routes = Router();

const categories = [
  { id: 1, carEngine: "electric" },
  { id: 2, carEngine: "v4" },
  { id: 3, carEngine: "v6" },
];

routes.get("/", (req, res) => {
  res.json(categories);
});

routes.get("/:categoryid", (req, res) => {
  const category = categories.filter((element) => {
    return element.id == req.params.categoryid;
  });
  res.json(category);
});

module.exports = routes;
