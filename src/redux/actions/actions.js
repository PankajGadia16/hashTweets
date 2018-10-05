import axios from 'axios'

const url = "http://localhost:5000/api/"

function timeoutFunction(){
    
}
export function getTweets() {
    const hashString = document.getElementById('hashString').value
    return (dispatch) => {
        setTimeout(getTweets,5000)
        axios.get(`${url}getTweets?hashString=${hashString}`)
            .then((res) => {
                let tweets = res.data
                console.log(res)
                dispatch({ type: 'LOAD_TWEETS', tweets })
            }).catch((err) => { console.log(err) })
        
    }
}