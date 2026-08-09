const express = require('express');

module.exports = (clientsRouter) => {
    const router = express.Router();
  
    router.post("/", (req, res) => (clientsRouter.registerCustomer(req, res)));

    return router
};