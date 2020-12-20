'use strict';

module.exports.saveCustomer = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Saved new customer successfully!',
      input: event,
    }),
  };

  callback(null, response);
};
