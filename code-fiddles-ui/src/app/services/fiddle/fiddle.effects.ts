import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import { UserService } from "../user.service";
import { FIDDLE_ADDED, FIDDLE_ADDED_FAIL, FIDDLE_ADDED_SUCCESS, LOAD_FIDDLES, LOAD_FIDDLES_FAIL, LOAD_FIDDLES_SUCCESS } from "./fiddle.actions";
import { FiddleModel } from "./fiddle.model";
import { FiddleService } from "./fiddle.service";

@Injectable()
export class FiddleEffects {

	constructor(private actions$: Actions, private fiddleService: FiddleService, private userService: UserService) {}

	loadFiddles$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LOAD_FIDDLES),
			mergeMap(() => this.fiddleService.getFiddles()
				.pipe(
					map((fiddles: FiddleModel[]) => (LOAD_FIDDLES_SUCCESS({ fiddles: fiddles }))),
					catchError((err) => (of(LOAD_FIDDLES_FAIL({ error: err }))))
				)
			)
		)
	);

	addFiddle$ = createEffect(() =>

		this.actions$.pipe(
			ofType(FIDDLE_ADDED),
			exhaustMap((action) => this.fiddleService.createFiddle(action.fiddle)
				.pipe(
					map(response => FIDDLE_ADDED_SUCCESS()),
					catchError(err => of(FIDDLE_ADDED_FAIL({error: err})))
				))
		)
	);

}
