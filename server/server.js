const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "../client")));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});