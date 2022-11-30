const { Router } = require("express");
const routes = Router();

const products = [
  { id: 1, product: "bmw", color: "red" },
  { id: 2, product: "audi", color: "blue" },
  { id: 3, product: "mercedes", color: "green" },
];

routes.get("/", (req, res) => {
  res.json(products);
});

routes.get("/:productid", (req, res) => {
  const product = products.filter((element) => {
    return element.id == req.params.productid;
  });
  res.json(product);
});

module.exports = routes;
