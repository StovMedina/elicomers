const { Router } = require("express");
const routes = Router();

const orders = [
  { id: 1, orderDestiny: "Mexico", shipmentMethod: "Air" },
  { id: 2, orderDestiny: "Chile", shipmentMethod: "Land" },
  { id: 3, orderDestiny: "España", shipmentMethod: "Sea" },
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

routes.post("/", (req, res) => {
  const data = req.body;
  const { orderDestiny, shipmentMethod } = data;
  const newOrder = { orderDestiny, shipmentMethod, id: "nueva orden perrona" };
  if (!data) {
    res.status(400).json({ message: "se requiere la data prro" });
  } else {
    res.status(201).json({
      ok: true,
      message: "ya quedó perrona la roden",
      payload: newOrder,
    });
  }
  res.status(201).json({ message: "ahi te va la orden prro" });
});

routes.put("/", (req, res) => {
  res.status(405).json({ message: "Not allowed" });
});

routes.put("/:id", (req, res) => {
  res.json({ message: `Producto con el ${req.params.id} modificado` });
});

routes.delete("/:id", (req, res) => {
  res.json({ message: `Producto con el ${req.params.id} eliminado` });
});

module.exports = routes;
