export function followers(state=[], action) {
    switch(action.type){
        case 'FOLLOWERS_FETCH_DATA_SUCCESS':
            return action.followers
        default:
            return state;
    }
}