const LambdaEvent = require('./lambda-event');
const paths = require('./resources23.json');
const lambdaSelector = require('../microservices23/lambda-selector');
/*****************************************************************************/

class apiGateway23 {
    constructor() { }
    getEndpoint() { 
        this.apiObj23 = paths[1];
        return '/heroines/{proxy+}';
    }
    main(req, reqBody) { 
        let endpoint = this.getEndpoint();
        console.log(endpoint);
        let lambdaEvent = new LambdaEvent(endpoint).getLambda('', req, reqBody);
        return lambdaSelector.handler('heroines', lambdaEvent).then(data => data)
    }
}
/*****************************************************************************/

module.exports = apiGateway23;