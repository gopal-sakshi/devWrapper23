/***************************************************************/
const crypto = require('crypto');
/***************************************************************/

var handler = async (lambdaName, event, log) => {
    console.log('@ handler');
    event.requestContext = (event.requestContext) ? event.requestContext : {};
    event.requestContext.requestId = uuidV4();
    filePath = __dirname + '/' + lambdaName + '/index';
    console.log('filePath23 ====> ', filePath);
    try { index = require(filePath); } catch(error) { console.log(error) }
    console.log(index);
    if (index.handler) {
        const data22 = await index.handler(event, getContext(lambdaName, event.requestContext.requestId));
        return data22;
    }
}

/***************************************************************/
function uuidV4() {
    var rnd = crypto.randomBytes(16);
    rnd[6] = rnd[6] & 0x0f | 0x40;
    rnd[8] = rnd[8] & 0x3f | 0x80;
    rnd = rnd.toString("hex").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/u);
    rnd.shift();
    return rnd.join("-");
}


function getContext(lambdaName, uuid) {
    return {
      "callbackWaitsForEmptyEventLoop": true,
      "logGroupName": `/aws/lambda/${lambdaName}`,      
      "functionName": lambdaName,      
      "invokeid": uuid,
      "awsRequestId": uuid,      
      "succeed": (params) => undefined
    }
}
/***************************************************************/
module.exports = { handler }