const express = require("express");
const app = express();
const port = 5001;
const cors = require("cors");

const corsOptions = {
  origin: function (origin, callback) {
    if ((!origin, callback)) {
      callback(null, true);
    } else {
      callback(new Error("not allowed bycors"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.get("/api/", (req, res) => {
  res.send("Hello World!");
});
app.post("/api/get-data", (req, res) => {
  res.send({ text: "webapp.io" });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});