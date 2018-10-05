import React, { Component } from 'react'
import { connect } from 'react-redux'
import TweetListItem from './TweetListItem'
import { getTweets } from '../redux/actions/actions'

class Home extends Component {
    componentDidMount() {
        this.props.getTweets()
    }
    render() {
        return (

            <div>
                <h3>Showing recent tweets...!</h3>
                <table>
                    {this.props.tweets.tweets.map(tweet => <TweetListItem item={tweet} key={tweet.id} />)}
                </table>
            
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tweets: state.tweets,
    }
}
const mapDispatchToProps = {
    getTweets
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)