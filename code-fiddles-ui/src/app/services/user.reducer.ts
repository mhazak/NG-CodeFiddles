import { AuthActions, SET_AUTH, SET_NON_AUTH } from "./user.actions";

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
		default:
			return state;
	}
}

export const getIsAuth = (state: State) => state.isAuthenticated;
