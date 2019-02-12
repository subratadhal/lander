// server/app.js
const express = require("express");
const path = require("path");
const cors = require('cors');
const app = express();
const basicAuth = require("express-basic-auth");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// app.use(
//   basicAuth({
//     users: {
//       admin: "technical"
//     },
//     challenge: true
//   })
// );


// // Serve static assets
// app.use(express.static(path.resolve(__dirname, "..", "build")));

// // Always return the main index.html, so react-router render the route in the client
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
// });


module.exports = app;
