import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { countryReducer } from "./reducers";
import { AppActions } from "./actionTypes/actions";
import { client } from '../utils/client'

export const rootReducer = combineReducers({
    rootReducer: countryReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(client) as ThunkMiddleware<AppState, AppActions>)
);