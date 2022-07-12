import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { SET_AUTH, SET_AUTH_FAILED, SET_AUTH_SUCCESS } from "./user.actions";
import { UserService } from "./user.service";

@Injectable()
export class UserEffects {

	constructor(private userService: UserService, private actions$: Actions) {}

	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SET_AUTH),
			exhaustMap(action => this.userService.login(action.user)
				.pipe(
					map((response: { id: string, success: boolean}) => SET_AUTH_SUCCESS({ authenticatedUser: { email: action.user.email, id: response.id} })),
					catchError(err => of(SET_AUTH_FAILED({ error: err})))
				)
			)
		)
	);
}
