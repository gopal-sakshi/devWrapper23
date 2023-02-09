/********************************************************************/
const proxy = require('./proxy-request');
/********************************************************************/
class LambdaEvent {
    constructor(endpoint) {
        this.endpoint = endpoint;    
        this.path = (endpoint) ? this.getPath(endpoint).split("/") : [];
    }

    getLambda(stage, req, body) {
        let stage = '';
        let path = '';
        let query = '';
        
        return proxy.getLambdaEvent(stage, this.endpoint, req, path, query, body);
    }
}

module.exports = LambdaEvent;