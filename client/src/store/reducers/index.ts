import {
    SET_LOADING,
    LOGIN,
    REGISTER,
    LOGOUT,
    GET_APARTMENTS,
    GET_VOUCHERS,
    ADD_APARTMENTS,
    ActionTypes,
} from '../actionTypes/actions';

const initialState = {
    loading: false,
    isAuth: false,
    user: {},
    apartments: [],
    vouchers: []
};

const countryReducer = (state = initialState, action: ActionTypes): any => {
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
            localStorage.setItem('userId', "")
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        case GET_APARTMENTS:
            return {
                ...state,
                apartments: action.apartments
            }
        case GET_VOUCHERS:
            return {
                ...state,
                vouchers: action.vouchers
            }
        case ADD_APARTMENTS:
            return {
                ...state,
                apartments: [...state.apartments, action.apartment]
            }
        default:
            return state;
    }
}

export { countryReducer };