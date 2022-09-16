const express = require("express");
const path = require("path");
const { submitContactForm } = require("./request");

const apiKey = process.env.AIRTABLE_API_KEY || process.argv[2];
const PORT = process.env.PORT || 3042;
const app = express();
app.use(express.text());

// path to submit contact form
app.post("/submitContactForm", (request, response) => {
  let responseBody = submitContactForm(apiKey, request.body)
  .catch(e => console.log(e));
  if (!responseBody) {
    responseBody = "";
  }
  response.json(responseBody);
});

// send react app for all other get requests
app.use(express.static(path.resolve(__dirname, "../../build")));
app.get("/*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
