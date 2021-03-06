const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("./router")(app);
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
