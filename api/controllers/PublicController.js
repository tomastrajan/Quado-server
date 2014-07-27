var moment = require('moment');

var PublicController = {

    index: function(req, res) {
        return res.view();
    },

    arcade: function(req, res) {
        ScoreService.findScores('ARCADE', PaginationService.getPagination(req), function(err, scores, pagination) {
            return res.view({
                pagination: pagination,
                scores: scores,
                moment: moment
            });
        });
    },

    normal: function(req, res) {
        ScoreService.findScores('NORMAL', PaginationService.getPagination(req), function(err, scores, pagination) {
            return res.view({
                pagination: pagination,
                scores: scores,
                moment: moment
            });
        });
    },

};
module.exports = PublicController;