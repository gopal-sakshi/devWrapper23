/************** LETS BEGIN THE INSANITY *********************/

const express = require('express');
const app = express();
const PORT = 3143;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });
const api23 = require('./api-gateway/index');
/*****************************************************************/

app.use(function (req, res, next) {
    if(req.url.startsWith('/v2/')) {
        new api23().main(req, req.body).then(result => processResult(result, res));
        console.log('till now okay')
    }
    next();
})

app.get('/', (req, res) => { res.send('lets begin insanity'); });
/*****************************************************************/
function processResult(result, res) {
    // add headers & stuff
    res.send(JSON.stringify(result));
}