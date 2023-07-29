import {combineReducers} from 'redux';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
     users:usersReducer,
});
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
