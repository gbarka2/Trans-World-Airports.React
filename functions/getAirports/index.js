//We export the function
exports.handler = async function(event, context) {
  //Fetch request details from event object
  const {path, httpMethod, headers, queryStringParameters, body} = event
  const city = queryStringParameters.city
  const myBody = {city}
  // return some JSON data with a status of 200
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(myBody)
  }
}