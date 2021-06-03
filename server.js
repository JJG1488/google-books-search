// pulling in express
const express = require('express');
// setting express to variable "app"
const app = express();
// declaring port to listen on
const PORT = process.env.PORT || 3001;
// pulling in path 
const path = require("path");
// pulling in Mongoose
const mongoose = require('mongoose');
const routes = require("./routes");

// set up body parsing, static, and route middleware
// =================================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(express.static("client/public"));
app.use(routes);


// app.use('/', routes);
// app.use('/users', routes);

// db connection
// =================================================
// setting connection string to "uri"
const uri = "mongodb://localhost:27017/googlebooks";
// process.env.MONGODB_URI ||

// // setting up options for connection
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

// connecting uri and options to mongoose
mongoose.connect(uri, options);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!")
});
// routes
// =================================================

// server
// =================================================
app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}`);
})


