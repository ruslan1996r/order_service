import { Dispatch } from 'react';
import { AppState } from '../configureStore';
import {
    SET_LOADING,
    LOGIN,
    REGISTER,
    LOGOUT,
    GET_APARTMENTS,
    ADD_APARTMENTS,
    GET_VOUCHERS,
    ADD_VOUCHERS,
    AppActions
} from '../actionTypes/actions';
import { User, Apartment, Voucher } from "../../types"
import { loginUser, registerUser, editApartment, addApartment } from "../api/mutation"
import { findApartment, findVouchers, findUserById } from "../api/queries"

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
export const logoutAction = (): AppActions => ({
    type: LOGOUT
})
export const getApartmentsAction = (apartments: Apartment[]): AppActions => ({
    type: GET_APARTMENTS,
    apartments
})
export const getVouchersAction = (vouchers: Voucher[]): AppActions => ({
    type: GET_VOUCHERS,
    vouchers
})
export const addApartmentAction = (apartment: Apartment): AppActions => ({
    type: ADD_APARTMENTS,
    apartment
})

// THUNKS
export const loginUserThunk = (email: string) => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const result = await client.mutate({ mutation: loginUser, variables: email })
            localStorage.setItem('userId', result.data.loginUser.id)
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
            localStorage.setItem('userId', result.data.registerUser.id)
            dispatch(registerUserAction(result.data.registerUser))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}
export const getCurrentUserThunk = () => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const userId = localStorage.getItem('userId')
            if (userId) {
                const result = await client.query({ query: findUserById, variables: { id: userId } })
                dispatch(loginUserAction(result.data.user))
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}
export const getApartmentsThunk = (args?: any) => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const result = await client.query({ query: findApartment, variables: args })
            dispatch(getApartmentsAction(result.data.apartments))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}
export const getVouchersThunk = () => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const result = await client.query({ query: findVouchers, variables: {} })
            dispatch(getVouchersAction(result.data.vouchers))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}
export const editApartmentThunk = (args: any) => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const result = await client.mutate({ mutation: editApartment, variables: args })
            const apartments = [...getState().rootReducer.apartments]
            const index = apartments.findIndex((a: any) => a.id === result.data.editApartment.id)
            apartments.splice(index, 1, result.data.editApartment)
            dispatch(getApartmentsAction(apartments))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}
export const addApartmentThunk = (apartment: Apartment) => {
    return async (dispatch: Dispatch<AppActions>, getState: any, client: any): Promise<void> => {
        try {
            dispatch(setLoadingAction(true))
            const result = await client.mutate({ mutation: addApartment, variables: apartment })
            dispatch(addApartmentAction(result.data.addApartment))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}