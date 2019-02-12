var emailoperation = require('../controller/email.controller');

module.exports = function (app) {
    // User Registration and fetch user
    app.route('/emailvalidate').post(emailoperation.emailValidation);

    // Handle 400
    app.use(function (req, res) {
        res.status(400);
        res.send({ success: false, message: '404: File Not Found.' });
    });

    // Handle 500
    app.use(function (error, req, res, next) {
        res.status(500);
        res.send({ success: false, message: '500: Internal Server Error.', error: error });
    });
}