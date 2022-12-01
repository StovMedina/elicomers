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

routes.post("/", (req, res) => {
  const data = req.body;
  const { product, color } = data;
  const newProduct = { product, color, id: "carro nuevo peron" };
  if (!data) {
    res.status(400).json({ message: "se requiere la data prro" });
  } else {
    res.status(201).json({
      ok: true,
      message: "ahí está el carro perron",
      payload: newProduct,
    });
  }
  res.status(201).json({ message: "el sin carro prro" });
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
