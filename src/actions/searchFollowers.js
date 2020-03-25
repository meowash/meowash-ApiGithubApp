export function searchFollowersFetchDataSuccess(searchFollowers) {
    return {
        type: 'SEARCH_FOLLOWERS_FETCH_DATA_SUCCESS',
        searchFollowers
    }
}

export function searchFollowersFetchData(url) {
    return(dispatch)=> {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response
        })
        .then(response => response.json())
        .then(searchFollowers => dispatch(searchFollowersFetchDataSuccess(searchFollowers)))
    }
}
