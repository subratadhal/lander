const NeverBounce = require('neverbounce');
const config = require("../../src/config.json");
const client = new NeverBounce({ apiKey: config.neverbounce_api_key });

exports.emailValidation = function (req, res) {
    return client.single.check(req.body.email).then(
        resp => {
            return res.json({ success: true, message: resp.getResult() });
        },
        err => {
            switch (err.type) {
                case NeverBounce.errors.AuthError:
                    // The API credentials used are bad, have you reset them recently?
                    break;
                case NeverBounce.errors.BadReferrerError:
                    // The script is being used from an unauthorized source, you may need to
                    // adjust your app's settings to allow it to be used from here
                    break;
                case NeverBounce.errors.ThrottleError:
                    // Too many requests in a short amount of time, try again shortly or adjust
                    // your rate limit settings for this application in the dashboard
                    break;
                case NeverBounce.errors.GeneralError:
                    // A non recoverable API error occurred check the message for details
                    break;
                default:
                    // Other non specific errors
                    break;
            }
            return res.json({ success: false, message: 'Something going wrong' });
        }
    );
};


//https://github.com/NeverBounce/NeverBounceApi-NodeJS
//https://developers.neverbounce.com/docs/verifying-an-email
//https://app.neverbounce.com/apps/custom-integration/eE0Bmd/overview