import { Action } from "@ngrx/store"

export const SET_NON_AUTH = '[AUTH] NON AUTHENTICATED';
export const SET_AUTH = '[AUTH] AUTHENTICATED';
export const CHECK_AUTH = '[AUTH] CHECK AUTH';

export class SetAuthenticated implements Action {
	readonly type = SET_AUTH;
}

export class SetUnauthenticated implements Action {
	readonly type = SET_NON_AUTH;
}

export class CheckAuthenticated implements Action {
	readonly type = CHECK_AUTH;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated | CheckAuthenticated;
