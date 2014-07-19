var ScoreService = {

    createOrUpdateScore: function(newScore, callback) {
        sails.log.info('Create or update score - ' + JSON.stringify(newScore));
        query = {
            where: {
                playerUuid: newScore.playerUuid,
                gameMode: newScore.gameMode
            }
        }
        Score.findOne(query).exec(function (err, score) {
            if (score) {
                if (newScore.score < score.score) {
                    callback(err, score);
                    sails.log.info('Create or update score - Preserved old score (new score < old score)');
                    return;
                } else {
                    Score.update(query, newScore, function(err, scores) {
                        callback(err, scores[0]);
                    });
                    sails.log.info('Create or update score - Updated score record');
                }
            } else {
                Score.create(newScore, callback);
                sails.log.info('Create or update score - Created new score record');
            }
        });
    },

    findScoresForPlayer: function(gameMode, playerUuid, callback) {
        sails.log.info('Find scores for player - ' + gameMode + "/" + playerUuid);
        var result = [];
        Score.find({
            where: {
                score: {
                    '>': 0
                },
                gameMode: gameMode
            },
            sort: 'score DESC'
        }, function(err, scores) {
            for (var i = 0; i < scores.length; i++) {
                if (scores[i].playerUuid === playerUuid) {
                    for (var j = 4; j >= 1; j--) {
                        if (scores[i - j]) {
                            scores[i - j].position = i - j + 1;
                            result.push(scores[i - j])
                        }
                    }
                    scores[i].position = i + 1
                    result.push(scores[i]);
                    for (var k = 1; k <= 5; k++) {
                        if (scores[i + k]) {
                            scores[i + k].position = i + k + 1;
                            result.push(scores[i + k])
                        }
                    }
                    break;
                }
            }
            callback(err, result);
        });
    },

    findTopTenScores: function (gameMode, callback) {
        Score.find({
            where: {
                score: {
                    '>': 0
                },
                gameMode: gameMode
            },
            limit: 10,
            sort: 'score DESC'
        }, function(err, scores) {
            var i = 1;
            scores.forEach(function(score) {
                score.position = i;
                i++;
            });
            callback(err, scores);
        });
    }

};

module.exports = ScoreService;