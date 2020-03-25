export function informations(state=[], action) {
    switch(action.type){
        case 'INFORMATIONS_FETCH_DATA_SUCCESS':
            return action.informations
        default:
            return state;
    }
}