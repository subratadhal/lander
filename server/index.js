// server/index.js

const app = require("./app");

var routes = require('./routes/routes');
routes(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

