import React, { Component } from 'react'
import { connect } from 'react-redux'

class MetricListItem extends Component {

    render() {
        return (
            <tr>
                <td style={{ padding: "10px" }}>{this.props.item.userName}</td>
                <td style={{ padding: "10px" }}>{this.props.item.tweetText}</td>
            </tr>
        )
    }
}
const mapStateToProps = state => {
    return {
        tweets: state.tweets,
    }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(MetricListItem)