const usersRouter = require("./usersRouter");
const getProducts = require("./getProducts");
const getCategories = require("./getCategories");
const getOrders = require("./getOrders");

const apiRouter = (app) => {
  app.use("/users", usersRouter);
  app.use("/products", getProducts);
  app.use("/categories", getCategories);
  app.use("/orders", getOrders);
};

module.exports = apiRouter;
