var ScoreController = {

    create: function(req, res) {
        ScoreService.createOrUpdateScore(req.body, function(err, score) {
            res.json(score);
        });
    },

    player: function(req, res) {
        var gameMode = req.param('gameMode');
        var playerUuid = req.param('playerUuid');
        ScoreService.findScoresForPlayer(gameMode, playerUuid, function(err, scores) {
            res.json(scores);
        });
    },

    top10: function(req, res) {
        var gameMode = req.param('gameMode');
        ScoreService.findTopTenScores(gameMode, function(err, scores) {
            res.json(scores);
        });
    }

};
module.exports = ScoreController;