const express = require("express");
const app = express();
const apiRouter = require("./src/routes");

apiRouter(app);

// app.get("/hi", (req, res) => {
//     //request es la solicitud de parte del cliente que contiene los datos que se necesitan
//   res.send("quiubo prro");//response, le manda al navegador/cliente datos (un objeto)
// });

// app.listen(8000);

app.get("/", (req, res) => {
  res.json({ message: "El api jalando al tiro" });
});

app.listen(8000);
