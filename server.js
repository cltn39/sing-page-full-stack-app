const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
// API routes
const routes = require("./routes");
// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT} !`);
  });
});