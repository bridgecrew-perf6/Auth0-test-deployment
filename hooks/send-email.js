module.exports = function (user, context, cb) {
  const auth0 = require('auth0');
  const authClient = new auth0.AuthenticationClient({
    domain: 'auth0-test-integration.us.auth0.com', // Add your domain here (you can find your domain from your application settings)
    clientId: 'sYVzUKoAnmExN7msqqFg66HRV70j8Im4' // Add your app's Client ID here (you can find the Client ID from your application settings)
  });

  const userAndConnection = {
    email: user.email,
    connection: 'Username-Password-Authentication'
  };

  authClient.requestChangePasswordEmail(userAndConnection, () => {
  cb(null, user, context);
  });
};