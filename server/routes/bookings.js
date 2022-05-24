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
    let db_connect = dbo.getDb();
    // let booking = {
    //     data: req.body
    // };
    let booking = req.body;
    console.log("Booking: ", booking);
    db_connect.collection("bookings").insertOne(booking, function (err, res) 
    {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you update a record by id.
bookingsRoutes.route("/medlem/boka/uppdatera_bokning/:id").put(function (req, response) {
    console.log("********* /medlem/boka/uppdatera_bokning ********");
    console.log("req.body", req.body);
    
    let db_connect = dbo.getDb();
    const _id = req.params.id;
    let query = { _id: ObjectId( _id )};  
    let newvalues = {$set : req.body[_id]}

    db_connect.collection("bookings").updateOne(
        query, 
        newvalues, 
        function (err, obj) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(obj);
        }
    );
});

// This section will help you get a list of all the bookings.
bookingsRoutes.route("/medlem/boka/hamta_alla").get(function (req, res) {
    let db_connect = dbo.getDb("database");
    db_connect
        .collection("bookings")
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

// This section will help you delete a record
bookingsRoutes.route("/medlem/boka/ta_bort_bokning/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};

    db_connect
        .collection("bookings")
        .deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            response.json(obj);
        });
  });

module.exports = bookingsRoutes;