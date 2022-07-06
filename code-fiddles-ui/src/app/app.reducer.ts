import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './services/user.reducer';

export interface State {
	user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
	user: fromUser.authReducer
}

export const getUserState = createFeatureSelector<fromUser.State>('user');
export const getIsAuthenticated = createSelector(getUserState, fromUser.getIsAuth);
