const express = require("express");
const app = express();
const homeRoutes = require("./routes/home");

app.listen(3030, () => console.log("Running on 3030"));

app.use("/", homeRoutes)