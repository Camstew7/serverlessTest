const request = require('superagent')


// make superAgent request and return promise
module.exports = async (event) => {
  try {
    let response = await request.get(`${process.env.TEST_HAPI_API_URL}/api/data`)
    return {
      statusCode: 200,
      headers : {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.error(err)

    return {
      statusCode:500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(err.stack)
    }

  }


}