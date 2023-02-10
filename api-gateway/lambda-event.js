/********************************************************************/
const proxy = require('./proxy-request');
/********************************************************************/
class LambdaEvent {
    constructor(endpoint) {
        this.endpoint = endpoint;    
        // this.path = (endpoint) ? this.getPath(endpoint).split("/") : [];
        this.path = [ 'profiles', '{proxy+}' ];
        console.log(this.path);             // [ 'profiles', '{proxy+}' ]
    }

    getLambda(stage, req, body) { 
        let path = { proxy: 'M00005c0PRFREG2018121836247191UNH001' };
        let query = {};
        return proxy.getLambdaEvent(stage, this.endpoint, req, path, query, body);
    }
}

module.exports = LambdaEvent;