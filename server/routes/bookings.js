const express = require("express");

// bookingsRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting 
// with path /medlem/boka.
const bookingsRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

/* Database is structured as follows:

    Booking
        id          ObjectId
        startDate   Date
        endDate     Date
        title       string
        notes       string
        allDay      boolean
        Person
            id      ObjectId
            Name    string
        Logging
            id              ObjectId
            Start mileage   int
            Stop mileage    int
            Private         boolean
            Committee       string
            Price           double
            Paid            boolean
*/

// This section will help you create a new booking.
bookingsRoutes.route("/medlem/boka/ny_bokning").post(function (req, response) 
{
    console.log("/medlem/boka/ny_bokning");
    console.log("id: ", req.params.id);
    let db_connect = dbo.getDb();
    let booking = {
        data: req.body.data
    };
    db_connect.collection("bookings").insertOne(booking, function (err, res) 
    {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you get a list of all the bookings.
bookingsRoutes.route("/medlem/boka/hamta_alla").get(function (req, res) {
    let db_connect = dbo.getDb("database");
    db_connect
        .collection("bookings")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = bookingsRoutes;