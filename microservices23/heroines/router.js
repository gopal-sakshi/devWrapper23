const api45 = require('lambda-api')({ version: '', base: 'heroines' });
const teluguRouter = require('./routes/telugu/telugu.router');
const tamilRouter = require('./routes/tamil/tamil.router')
/*******************************************************************************/
api45.use((req,res,next) => { res.cors(); next() });
/*******************************************************************************/
async function router(event) { 
    const blah24 = await startRestApiService(event);    
    return new Promise ((resolve, reject) => {
        if(blah24) resolve(blah24)
        else reject('something went wrong');
    });
}

async function startRestApiService(event) {
    console.log(event.path);
    api45.register(teluguRouter, { prefix: '/telugu', path: event.path });
    api45.register(tamilRouter, { prefix: '/tamil', path: event.path });
    await api45.run(event, undefined, (err, data) => {
        if (err) return err
        else return data;
    })
}
/*********************************************************************/
module.exports = router;
/*********************************************************************/

