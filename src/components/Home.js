import React, { Component } from 'react'
import { connect } from 'react-redux'
import TweetListItem from './TweetListItem'
import { getTweets } from '../redux/actions/actions'

class Home extends Component {

    
    render() {
        return (

            <div>
                <input placeholder="HastTag Word" id="hashString" >{this.props.hashString}</input>
                <button onClick={this.props.getTweets.bind(this.props.item)} >Watch</button>
                <h3>Showing recent tweets...!</h3>
                <div style={{ "overflow-y":"scroll", height:"400px"}}>

                <table >
                    {this.props.tweets.tweets.map(tweet => <TweetListItem item={tweet} key={tweet.id} />)}
                </table>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tweets: state.tweets,
        hashString: state.hashString
    }
}
const mapDispatchToProps = {
    getTweets
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)