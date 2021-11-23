const express = require("express");

const routes = express.Router();

routes.get("/", (request, response) => {
  response.json(`Received a request on ${request.originalUrl}`);
});

routes.get("/:postID", (request, response) => {
  response.json(`Route param was ${request.params.postID}`);
});

routes.post("/:postID", (request, response) => {
  let submittedData = request.body;
  console.log(JSON.stringify(submittedData));
  response.json(
    `Received a post request with these params: ${request.params.postID}`
  );
});

module.exports = routes;
