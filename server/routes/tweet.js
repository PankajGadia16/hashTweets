const tweetController = require('../controllers/tweet.ctrl')

module.exports = (router) => {

    router.route('/getTweets').get(tweetController.loadTweets)

}