var PaginationService = {

    getPagination: function(req) {
        return  {
            page: parseInt(req.param('page') || 0),
            pageSize: parseInt(req.param('pageSize') || 10)
        }
    }

};
module.exports = PaginationService;