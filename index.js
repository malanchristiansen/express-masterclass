const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

/// we can receive json data from post/put/patch etc. requests
app.use(express.json());
//same as above but for form data
app.use(express.urlencoded({ extended: true }));

// app.get("/", (request, response) => {
//   response.send("G'day mate!!");
// });

app.get("/", (request, response) => {
  response.json({ message: "G'day Mate!" });
});

app.listen(PORT, HOST, () => {
  console.log("server is running");
});
