import { Dispatch } from 'react';
import { graphql } from 'react-apollo';
import { AppState } from '../configureStore';
import {
    SET_LOADING,
    LOGIN,
    REGISTER,
    LOGOUT,
    AppActions
} from '../actionTypes/actions';
import { User, Apartment, Voucher } from "../../types"
import { loginUser, registerUser } from "../api/mutation"
import { findApartment, findVouchers } from "../api/queries"

// ACTION CREATORS
export const setLoadingAction = (loading: boolean): AppActions => ({
    type: SET_LOADING,
    loading
})
export const loginUserAction = (user: User): AppActions => ({
    type: LOGIN,
    user
})
export const registerUserAction = (user: User): AppActions => ({
    type: REGISTER,
    user
})
export const logout = (): AppActions => ({
    type: LOGOUT
})

// THUNKS
export const loginUserThunk = (email: string) => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const result = await client.mutate({ mutation: loginUser, variables: email })
            dispatch(loginUserAction(result.data.loginUser))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}
export const registerUserThunk = (user: User) => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const result = await client.mutate({ mutation: registerUser, variables: user })
            dispatch(registerUserAction(result.data.registerUser))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}