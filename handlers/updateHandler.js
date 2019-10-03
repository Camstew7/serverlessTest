import request from 'superagent'


// make superAgent request and return promise
module.exports = async (event) => {
  try {
    await request.put(`${process.env.HAPI_API_URL}/api/data/?query=${event.body.query}`)
      .send(event.body.data)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
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