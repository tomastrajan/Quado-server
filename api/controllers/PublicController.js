var moment = require('moment');

var addToTop3IfMissing = function(scoresTop3) {
    for (var i = 0; i < 3; i++) {
        sails.log.info(scoresTop3[i]);
        if (!scoresTop3[i]) {
            scoresTop3[i] = {
                playerName: '',
                score: ''
            }
        }
    }
}

var getScores = function(gameMode, req, res) {
    ScoreService.findTopScores(gameMode, 3, function(err, scoresTop3){
        addToTop3IfMissing(scoresTop3);
        ScoreService.findScores(gameMode, PaginationService.getPagination(req), function(err, scores, pagination) {
            return res.view({
                pagination: pagination,
                scoresTop3: scoresTop3,
                scores: scores,
                moment: moment
            });
        });
    });
}

var PublicController = {

    index: function(req, res) {
        return res.view();
    },

    arcade: function(req, res) {
        getScores('ARCADE', req, res);
    },

    normal: function(req, res) {
        getScores('NORMAL', req, res);
    },

};
module.exports = PublicController;