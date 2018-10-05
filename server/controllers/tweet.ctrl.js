const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});


const responseFunction = (err, results, res, next, ) => {
    if (err)
        res.send(err)
    else if (!results)
        res.send(400)
    else
        return res.send(results)
    return next()
}
module.exports = {
    loadTweets: (req, res, next) => {
        const params = {
            q: '#car',
            result_type: "recent",
            lang: "en"
        };

        client.get('search/tweets', params, function (error, tweets, response) {
            if (error) {

                console.log(error)
                return
            }
            const myTweets = []
            tweets.statuses.forEach(tweet => {
                myTweets.push({ userName: tweet.user.name, tweetText: tweet.text })

            })
            responseFunction(null, myTweets, res, next)

        })

    }
}