module.exports = (router, querys) => {
    router.post('/dt', querys.searchByOriginDestiny);
}