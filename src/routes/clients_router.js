const express = require('express');

module.exports = (clientsRouter) => {
    const router = express.Router();
  
    router.post("/", (req, res) => (clientsRouter.registerCustomer(req, res)));
    router.patch("/:id", (req, res) => (clientsRouter.editCustomer(req, res)));
    router.get("/:id", (req, res) => (clientsRouter.getCustomer(req, res)));
    router.get("/", (req, res) => (clientsRouter.getAllCustomer(req, res)));

    return router
};