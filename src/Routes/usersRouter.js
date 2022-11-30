const { Router } = require("express");
const routes = Router();

const users = [
  { id: 1, username: "admin", firstName: "Admin", lastName: "System" },
  { id: 2, username: "staff", firstName: "Staff", lastName: "" },
  { id: 3, username: "customer", firstName: "Jhon", lastName: "Doe" },
];

routes.get("/", (req, res) => {
  res.json(users);
});

routes.get("/:userid", (req, res) => {
  const user = users.filter((element) => {
    return element.id == req.params.userid;
  });
  res.json(user);
});

routes.post("/", (req, res) => {
  //logica para crear un usuario
  const data = req.body;
  const { username, email } = data;
  const newUser = { username, email, id: "perrote" };
  if (!data) {
    res.status(400).json({ message: "se requiere la data prro" });
  } else {
    res.status(201).json({
      ok: true,
      message: "quedó prrote el usuario",
      payload: newUser,
    });
  }
  res.status(201).json({ message: "Usuario creado" });
});

routes.put("/", (req, res) => {
  res.status(405).json({ message: "Not allowed" });
});

routes.put("/:id", (req, res) => {
  //logica para editar usuario con el id X
  res.json({ message: `Usuario con el ${req.params.id} modificado` });
});

routes.delete("/:id", (req, res) => {
  //logica para eliminar usuario con X id
  res.json({ message: `Usuario con el ${req.params.id} eliminado` });
});
module.exports = routes;
