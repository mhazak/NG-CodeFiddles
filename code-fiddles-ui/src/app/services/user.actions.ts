import { createAction, props } from "@ngrx/store"
import { User } from "./user.model";

export const SET_NON_AUTH = createAction('[AUTH] Unauthentication in progress');
export const SET_NON_AUTH_SUCCESS = createAction('[AUTH] User is now unathenticated.');
export const SET_NON_AUTH_FAILED = createAction('[AUTH] User is not unathenticated, error.', props<{ error: string}>());

export const SET_AUTH = createAction('[AUTH] Authentication in progress', props<{ user: { email: string, password: string}}>());
export const SET_AUTH_SUCCESS = createAction('[AUTH] Authentication was successfully done.', props<{ authenticatedUser: { id: string, email: string }}>());
export const SET_AUTH_FAILED = createAction('[AUTH] Authentication was not done, error.', props<{ error: string}>());

export const GET_USER = createAction('[AUTH] Get logged user in process.');
export const GET_USER_SUCCESS = createAction('[AUTH] Get logged user is done.', props<{ user: { id: string, email: string }}>());
export const GET_USER_FAILED = createAction('[AUTH] Get logged user in process.', props<{ error: string}>());

export const CHECK_AUTH = createAction('[AUTH] CHECK AUTH');
