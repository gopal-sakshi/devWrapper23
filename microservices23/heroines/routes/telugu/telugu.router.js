const addMovie = async (req, res) => {
    console.log(req.url);
    return new Promise ((resolve, reject) => {
        resolve('movie Added');
    })
}

const showAll = async (req, res) => {
    console.log(req.url);
    return new Promise ((resolve, reject) => { resolve('showing all movies') })
}

const showDetails = async (req, res) => {
    return new Promise ((resolve, reject) => { resolve('showing magadheera info')})
}
/******************************************************************************/
function router(api, options) {
    api.METHOD(`POST`, `/addMovie`, addMovie);
    api.METHOD(`GET`, `/showALL`, showAll);
    api.METHOD(`GET`, `/showDetails/:movie`, showDetails);
}
/******************************************************************************/
module.exports = router;