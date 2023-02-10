const router = require('./router');
const handler = async (event, context) => {
    console.log('entered handler');
    const result = await router(event, context).then((data) => { console.log(data); return data; });    
}
module.exports.handler = handler;