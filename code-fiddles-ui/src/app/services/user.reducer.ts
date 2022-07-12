import { createReducer, on } from "@ngrx/store";
import * as UserActions from "./user.actions";

export interface State {
	isAuthenticated: boolean;
	loading: boolean;
	error: string;
	authenticatedUser: { id: string, email: string };
}

const initialState: State = { isAuthenticated: false, loading: true, error: '', authenticatedUser: null };

export const authReducer = createReducer(initialState,
	on(UserActions.SET_NON_AUTH, (state) => {
		return {
			... state,
			loading: true
		}
	}),
	on(UserActions.SET_NON_AUTH_SUCCESS, (state) => {
		return {
			... state,
			loading: false,
			isAuthenticated: false
		}
	}),
	on(UserActions.SET_NON_AUTH_FAILED, (state, { error }) => {
		return {
			... state,
			loading: false,
			isAuthenticated: true,
			error: error
		}
	}),
	on(UserActions.SET_AUTH, (state) => {
		return {
			... state,
			loading: true,
			isAuthenticated: false,
		}
	}),

	on(UserActions.SET_AUTH_SUCCESS, (state, { authenticatedUser }) => {
		return {
			... state,
			loading: false,
			isAuthenticated: true,
			authenticatedUser: authenticatedUser
		}
	}),

	on(UserActions.SET_AUTH_FAILED, (state, { error }) => {
		return {
			... state,
			loading: false,
			isAuthenticated: false,
			error: error
		}
	}),

	on(UserActions.GET_USER, (state) => {
		return {
			...state,
			loading: true
		}
	}),

	on(UserActions.GET_USER_SUCCESS, (state) => {
		return {
			...state,
			loading: false,
			user: state.authenticatedUser
		}
	}),

	on(UserActions.GET_USER_FAILED, (state, { error }) => {
		return {
			...state,
			loading: false,
			message: error
		}
	}),

	on(UserActions.CHECK_AUTH, (state) => {
		return {
			...state,
			isAuthenticated: state.isAuthenticated
		}
	}),

)
// export function authReducer (state: State = initialState, action: AuthActions) {
// 	switch (action.type) {

// 		case SET_AUTH:
// 			localStorage.setItem('isAuth', 'true');
// 			return { isAuthenticated: true };

// 		case SET_NON_AUTH:
// 			localStorage.removeItem('isAuth');
// 			return { isAuthenticated: false };

// 		case CHECK_AUTH:
// 			const _isAuth = localStorage.getItem('isAuth');
// 			if (_isAuth)
// 				return { isAuthenticated: true };
// 			else
// 				return { isAuthenticated: false };

// 		default:
// 			return state;
// 	}
// }

// export const getIsAuth = (state: State) => state.isAuthenticated;
