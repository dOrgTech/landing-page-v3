const fetch = require("node-fetch");

// takes form data as json string and submits to airtable
async function submitHireUsForm(apiKey, body) {
  return fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Table%201`, {
    method: "POST",
    headers: new fetch.Headers({
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    }),
    body: body,
  });
}

// export functions
exports.submitHireUsForm = (apiKey, body) => submitHireUsForm(apiKey, body);
