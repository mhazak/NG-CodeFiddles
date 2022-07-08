import { AuthActions, CHECK_AUTH, SET_AUTH, SET_NON_AUTH } from "./user.actions";

export interface State {
	isAuthenticated: boolean;
}

const initialState: State = { isAuthenticated: false };

export function authReducer (state: State = initialState, action: AuthActions) {
	switch (action.type) {

		case SET_AUTH:
			localStorage.setItem('isAuth', 'true');
			return { isAuthenticated: true };

		case SET_NON_AUTH:
			localStorage.removeItem('isAuth');
			return { isAuthenticated: false };

		case CHECK_AUTH:
			const _isAuth = localStorage.getItem('isAuth');
			if (_isAuth)
				return { isAuthenticated: true };
			else
				return { isAuthenticated: false };

		default:
			return state;
	}
}

export const getIsAuth = (state: State) => state.isAuthenticated;
