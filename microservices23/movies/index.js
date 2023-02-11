const router = require('./router');
const handler = async (event, context) => {
    return await router(event, context).then(data => data);    
}
module.exports.handler = handler;