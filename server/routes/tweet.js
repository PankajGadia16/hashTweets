const tweetController = require('../controllers/tweet.ctrl')

module.exports = (router) => {

    router.route('/getTweets').all(tweetController.loadTweets)

}