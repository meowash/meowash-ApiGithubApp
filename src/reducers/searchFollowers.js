export function searchFollowers(state=[], action) {
    switch(action.type){
        case 'SEARCH_FOLLOWERS_FETCH_DATA_SUCCESS':
            return action.searchFollowers
        default:
            return state;
    }
}