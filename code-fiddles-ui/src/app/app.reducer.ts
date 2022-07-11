import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './services/user.reducer';
import * as fromFiddle from './services/fiddle/fiddle.reducer';

export interface State {
	user: fromUser.State;
	fiddle: fromFiddle.State;
}

export const reducers: ActionReducerMap<State> = {
	user: fromUser.authReducer,
	fiddle: fromFiddle.fiddleReducer
}

export const getUserState = createFeatureSelector<fromUser.State>('user');
export const getIsAuthenticated = createSelector(getUserState, fromUser.getIsAuth);

export const getFiddleState = createFeatureSelector<fromFiddle.State>('fiddle');
export const getAvailableFiddles = createSelector(getFiddleState, fromFiddle.getAvailableFiddles);
