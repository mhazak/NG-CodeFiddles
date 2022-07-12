import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { LOAD_FIDDLES, LOAD_FIDDLES_FAIL, LOAD_FIDDLES_SUCCESS } from "./fiddle.actions";
import { FiddleModel } from "./fiddle.model";
import { FiddleService } from "./fiddle.service";

@Injectable()
export class FiddleEffects {

	constructor(private actions$: Actions, private fiddleService: FiddleService) {}

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

}
