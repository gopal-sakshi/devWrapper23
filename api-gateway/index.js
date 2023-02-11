const LambdaEvent = require('./lambda-event');
const paths = require('./resources23.json');
const lambdaSelector = require('../microservices23/lambda-selector');
/*****************************************************************************/

class apiGateway23 {
    constructor(path) { this.path = path; this.basePath = path.split('/')[1]; }
    async main(req, reqBody) { 
        let lambdaEvent = new LambdaEvent(this.path).getLambda('', req, reqBody);
        return lambdaSelector.handler(this.basePath, lambdaEvent).then(data => { console.log('data @ => ', data); return data });
    }
}
/*****************************************************************************/

module.exports = apiGateway23;