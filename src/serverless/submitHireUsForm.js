const { submitHireUsForm } = require("../server/requests");

exports.handler = async (event, context, callback) => {
  const apiKey = process.env.AIRTABLE_API_KEY;
  return submitHireUsForm(apiKey, body);
}