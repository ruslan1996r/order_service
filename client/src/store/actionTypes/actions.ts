import { User, Apartment, Voucher } from "../../types"

export const SET_LOADING = "SET_LOADING"
export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const LOGOUT = "LOGOUT"

export const GET_APARTMENTS = "GET_APARTMENTS"
export const ADD_APARTMENTS = "ADD_APARTMENTS"

export const GET_VOUCHERS = "GET_VOUCHERS"
export const ADD_VOUCHERS = "ADD_VOUCHERS"


export interface ACTION_SetLoading {
    type: typeof SET_LOADING,
    loading: boolean
}
export interface ACTION_Login {
    type: typeof LOGIN,
    user: User
}
export interface ACTION_Register {
    type: typeof REGISTER,
    user: User
}
export interface ACTION_Logout {
    type: typeof LOGOUT,
}
export interface ACTION_Get_Aparts {
    type: typeof GET_APARTMENTS,
    apartments: Apartment[]
}
export interface ACTION_Get_Vouchers {
    type: typeof GET_VOUCHERS,
    vouchers: Voucher[]
}
export interface ACTION_Add_Aparts {
    type: typeof ADD_APARTMENTS,
    apartment: Apartment
}

export type ActionTypes =
    ACTION_SetLoading |
    ACTION_Login |
    ACTION_Register |
    ACTION_Logout |
    ACTION_Get_Aparts |
    ACTION_Get_Vouchers |
    ACTION_Add_Aparts

export type AppActions = ActionTypes