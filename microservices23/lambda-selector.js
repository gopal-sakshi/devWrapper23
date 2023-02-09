/***************************************************************/
const crypto = require('crypto');
/***************************************************************/

var handler = async (lambdaName, event, log) => { 
    event.requestContext = (event.requestContext) ? event.requestContext : {};
    event.requestContext.requestId = uuidV4();
    filePath = __dirname + '/' + lambdaName + '/index';
    console.log(filePath);
    try { index = require(filePath); } catch(error) { console.log(error) }
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

/***************************************************************/
module.exports = { handler, call }