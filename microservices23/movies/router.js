async function router(event, cc) { 
    if(event.path == '/movies/telugu') {
        return new Promise ((resolve, reject) => resolve('telugu movies'));
    } else if (event.path == '/movies/telugu/showAll') {
        return new Promise ((resolve, reject) => resolve('showing all telugu movies'));
    } else {
        return new Promise ((resolve, reject) => resolve(event.path));
    }
}

/*********************************************************************/
module.exports = router;
/*********************************************************************/

