const createHandler = require('./handlers/createHandler')
const readHandler = require('./handlers/readHandler.js')
const updateHandler = require('./handlers/updateHandler.js')
const deleteHandler = require('./handlers/deleteHandler.js')

module.exports = {
  read: readHandler,
  create: createHandler,
  update: updateHandler,
  delete: deleteHandler

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
