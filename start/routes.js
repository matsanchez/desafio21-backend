"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.get("/products", "ProductController.get");

Route.get("/products/create", "ProductController.create").as("product.create");

Route.post("/products", "ProductController.store").validator(
  "StoreProductCreate"
);

Route.patch("/products/:id", ({ params }) => {
  return { params };
});

Route.delete("/products", "ProductController.delete").as("product_delete");
