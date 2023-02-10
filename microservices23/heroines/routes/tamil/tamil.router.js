const showHits = async (req, res) => {
    console.log(req.url);
    return new Promise ((resolve, reject) => {
        resolve('hits movies shown');
    })
}

const showFlops = async (req, res) => {
    console.log(req.url);
    return new Promise ((resolve, reject) => { resolve('flop movies list idugo') })
}

/******************************************************************************/
function router(api, options) {
    api.METHOD(`GET`, `/showHits`, showHits);
    api.METHOD(`GET`, `/showFlops`, showFlops);
}
/******************************************************************************/
module.exports = router;