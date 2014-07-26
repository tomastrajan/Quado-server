var PaginationService = {

    getPagination: function(req) {
        return  {
            url: req.protocol + '://' + req.get('Host') + req.path,
            page: parseInt(req.param('page') || 0),
            pageSize: parseInt(req.param('pageSize') || 10)
        }
    }

};
module.exports = PaginationService;