async function router(event, cc) { 
    if(event.path == '/heroines/telugu') {
        return new Promise ((resolve, reject) => resolve('telugu heroines'));
    } else if (event.path == '/heroines/telugu/showAll') {
        return new Promise ((resolve, reject) => resolve('showing all telugu heroines'));
    }
}

/*********************************************************************/
module.exports = router;
/*********************************************************************/

