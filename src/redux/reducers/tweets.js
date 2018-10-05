const initialState = {
    tweets: [],
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TWEETS':
            return {
                ...state,
                tweets: action.tweets
            }

        default:
            return state
    }
}