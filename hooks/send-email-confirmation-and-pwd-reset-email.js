module.exports = function (user, context, cb) {
  var auth0 = require('auth0@2.32.0');
  var authClient = new auth0.AuthenticationClient({
    domain: 'example-connections.us.auth0.com',
    clientId: 'bPb0czqa0HdWecUzx3SS4Nf7JLvLkz70',
    clientSecret: 'U0fTMspgZJckToDlJOc67JGyYyHQrOVj2Y3HTwiFbe0VcpO6OLv2TbX0HSAwOH1Y',
  });

  var userAndConnection = {
    email: user.email,
    connection: 'Username-Password-Authentication',
    connection_id: context.connection.id,
  };

  authClient.requestChangePasswordEmail(userAndConnection, function(err){
    cb(null, user, context);
  });
};