import { User } from "../../types"

export const SET_LOADING = "SET_LOADING"
export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const LOGOUT = "LOGOUT"

export const GET_APARTMENTS = "GET_APARTMENTS"
export const ADD_APARTMENTS = "ADD_APARTMENTS"
export const EDIT_APARTMENTS = "EDIT_APARTMENTS"

export const GET_VOUCHERS = "GET_VOUCHERS"
export const ADD_VOUCHERS = "ADD_VOUCHERS"
export const EDIT_VOUCHERS = "EDIT_VOUCHERS"


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
    findArgs: any
}

export type ActionTypes = ACTION_SetLoading | ACTION_Login | ACTION_Register | ACTION_Logout | ACTION_Get_Aparts
export type AppActions = ActionTypes