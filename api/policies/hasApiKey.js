// policies/canWrite.js
module.exports = function hasApiKey (req, res, next) {

    var reqApiKey = req.header('apiKey');

    if (!sails.config.security.allowedApiKeys) {
        sails.log.warn('Security - configuration - no allowed API keys specified')
        return res.forbidden();
    }

    if (!reqApiKey) {
        sails.log.warn('Security - no API key provided in request')
        return res.forbidden();
    }

    if (sails.config.security.allowedApiKeys.indexOf(reqApiKey) === -1) {
        sails.log.warn('Security - not valid API key')
        return res.forbidden();
    }

    next();
};