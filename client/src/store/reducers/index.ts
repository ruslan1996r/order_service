import {
    SET_LOADING,
    LOGIN,
    REGISTER,
    ActionTypes,
    LOGOUT
} from '../actionTypes/actions';

const initialState: any = {
    loading: false,
    isAuth: false,
    user: {},
    apartments: [],
    vouchers: []
};

const countryReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                user: action.user
            }
        case REGISTER:
            return {
                ...state,
                isAuth: true,
                user: action.user
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        default:
            return state;
    }
}

export { countryReducer };