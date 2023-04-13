"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "ProductController.get").as("product_view");

Route.get("/products/create", "ProductController.create").as("product_create");

Route.post("/products", "ProductController.store")
  .validator("StoreProductCreate")
  .as("product_store");

Route.post("/products/:id", "ProductController.delete").as("product_delete");
