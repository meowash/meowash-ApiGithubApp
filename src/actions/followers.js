export function followersFetchDataSuccess(followers) {
    return {
        type: 'FOLLOWERS_FETCH_DATA_SUCCESS',
        followers
    }
}

export function followersFetchData(url) {
    return(dispatch)=> {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response
        })
        .then(response => response.json())
        .then(followers => dispatch(followersFetchDataSuccess(followers)))
    }
}