const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use(
  '/customer',
  session({
    cookie: {
      secure: true,
      maxAge: 60000,
    },
    store: '', /** *TODO: Implement a session store **/
    secret: 'fingerprint_customer',
    resave: true,
    saveUninitialized: true,
  })
);

app.use('/customer/auth/*', function auth(req, res, next) {
  if (req.session.authorization) {
    let token = req.session.authorization['accessToken'];
    jwt.verify(token, 'access', function (err, user) {
      if (err) {
        return res.json({ message: 'User not authenticated' });
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.json({ message: 'User not logged in' });
  }
});

const PORT = 5000;

app.use('/customer', customer_routes);
app.use('/', genl_routes);

app.listen(PORT, function () {
  console.log('Server is running');
});
