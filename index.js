import createHandler from './handlers/createHandler.js'
import readHandler from './handlers/readHandler.js'
import updateHandler from './handlers/updateHandler.js'
import deleteHandler from './handlers/deleteHandler.js'

module.exports = {
  read: readHandler,
  create: createHandler,
  update: updateHandler,
  delete: deleteHandler

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
