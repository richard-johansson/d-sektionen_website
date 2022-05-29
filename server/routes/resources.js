const express = require("express");

// bookingsRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting 
// with path /medlem/boka.
const resourcesRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the resources.
resourcesRoutes.route("/medlem/boka/hamta_resurser").get(function (req, res) {
    let db_connect = dbo.getDb("database");
    db_connect
        .collection("resources.cars")
        .find({})
        .toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                // 
                res.send(JSON.stringify(result));
            }
        });
});

module.exports = resourcesRoutes;