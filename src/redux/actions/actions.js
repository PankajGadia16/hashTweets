import axios from 'axios'

const url = "http://localhost:6000/api/"

export function getTweets(searchWord) {
    return (dispatch) => {
        axios.get(`${url}getTweets`)
            .then((res) => {
                let tweets = res.data
                console.log(res)
                dispatch({ type: 'LOAD_TWEETS', tweets })
            }).catch((err) => { console.log(err) })
    }
}