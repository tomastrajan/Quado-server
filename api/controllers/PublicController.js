var PublicController = {

    index: function(req, res) {
        return res.view();
    },

    arcade: function(req, res) {
        ScoreService.findScores('ARCADE', function(err, scores) {
            return res.view({
                scores: scores
            });
        });
    },

    normal: function(req, res) {
        ScoreService.findScores('NORMAL', function(err, scores) {
            return res.view({
                scores: scores
            });
        });
    },

};
module.exports = PublicController;