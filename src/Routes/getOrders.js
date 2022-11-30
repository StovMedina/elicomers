const { Router } = require("express");
const routes = Router();

const orders = [
  { id: 1, orderDestiny: "Mexico" },
  { id: 2, orderDestiny: "Chile" },
  { id: 3, orderDestiny: "España" },
];

routes.get("/", (req, res) => {
  res.json(orders);
});

routes.get("/:orderid", (req, res) => {
  const order = orders.filter((element) => {
    return element.id == req.params.orderid;
  });
  res.json(order);
});

module.exports = routes;
