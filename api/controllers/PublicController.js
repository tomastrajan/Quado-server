var PublicController = {

    index: function(req, res) {
        return res.view();
    },

    arcade: function(req, res) {
        ScoreService.findScores('ARCADE', PaginationService.getPagination(req), function(err, scores, pagination) {
            return res.view({
                pagination: pagination,
                scores: scores
            });
        });
    },

    normal: function(req, res) {
        ScoreService.findScores('NORMAL', PaginationService.getPagination(req), function(err, scores, pagination) {
            return res.view({
                pagination: pagination,
                scores: scores
            });
        });
    },

};
module.exports = PublicController;