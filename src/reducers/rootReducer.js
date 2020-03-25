import { combineReducers } from "redux"
import {users} from './users'
import { followers } from "./followers";
import { informations } from "./informationAboutFollowers";
import { searchFollowers } from "./searchFollowers";

const rootReducer = combineReducers({
    users,
    followers,
    informations,
    searchFollowers
})

export default rootReducer