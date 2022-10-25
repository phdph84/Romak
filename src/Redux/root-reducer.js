import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"

import userReducer from "./user/user-reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist:['user']
}

const rootReducet = combineReducers({
    user: userReducer,
   
   
   
});

export default persistReducer(persistConfig,rootReducet);