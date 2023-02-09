const LambdaEvent = require('./lambda-event');
const paths = require('./resources23.json');

/*****************************************************************************/

class apiGateway23 {
    constructor(req) { }
    getEndpoint() { 
        this.apiObj23 = paths[1];
        return '/heroines/{proxy+}';
    }
    main() { 
        let endpoint = this.getEndpoint();
        let lambdaEvent = new LambdaEvent(endpoint).getLambda();
        lambdaSelector.handler(this.apiObj.lambda, lambdaEvent).then(data => data)
    }
}
/*****************************************************************************/

module.exports = apiGateway23;