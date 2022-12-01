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

routes.post("/", (req, res) => {
  const data = req.body;
  const { carEngine } = data;
  const newCategory = { carEngine, id: "nueva categoria perrona" };
  if (!data) {
    res.status(400).json({ message: "se requiere la data prro" });
  } else {
    res.status(201).json({
      ok: true,
      message: "salio la nueva categoria perrona",
      payload: newCategory,
    });
  }
  res.status(201).json({ message: "Aquí está la nueva categoria, prro" });
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
