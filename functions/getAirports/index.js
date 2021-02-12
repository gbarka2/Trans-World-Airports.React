const fetch = require('node-fetch')

//We export the function
exports.handler = async function(event, context) {
  //Fetch request details from event object
  const {path, httpMethod, headers, queryStringParameters, body} = event
  const city = queryStringParameters.city


  const apiKey = process.env.apiKey

  const url = `https://aviation-edge.com/v2/public/autocomplete?key=${apiKey}&city=${city}`

  const getCity = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // data.airportByCities = []
    // setData(data)
    return await data
  }

  const myBody = await getCity()

  // return some JSON data with a status of 200
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(myBody)
  }
}