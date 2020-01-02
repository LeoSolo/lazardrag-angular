import URL_CONSTANTS from '../services/api/consts';

function getVkRequestUrl(method, params, accessToken) {
    return URL_CONSTANTS.VK_SERVICE + '/' + method + '?' + params + '&access_token=' + accessToken + '&v=' + URL_CONSTANTS.VK_API_VERSION;
}
