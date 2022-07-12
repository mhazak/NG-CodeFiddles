import { createAction, props } from "@ngrx/store";
import { FiddleModel } from "./fiddle.model";

export const LOAD_FIDDLES = createAction('[Fiddles] Get available fiddles loading', props<{loading: boolean}>());
export const LOAD_FIDDLES_SUCCESS = createAction('[Fiddles] Get available fiddles success', props<{fiddles: FiddleModel[]}>());
export const LOAD_FIDDLES_FAIL = createAction('[Fiddles] Get available fiddles fail', props<{error: string}>());

export const FIDDLE_ADDED = createAction('[Fiddles] New fiddle is creating', props<{fiddle: FiddleModel}>());
export const FIDDLE_ADDED_SUCCESS = createAction('[Fiddles] New fiddle was created successfully');
export const FIDDLE_ADDED_FAIL = createAction('[Fiddles] New fiddle was not created, error', props<{error: string}>());

export const FIDDLE_UPDATED = createAction('[Fiddles] Fiddle is updating');
export const FIDDLE_UPDATED_SUCCESS = createAction('[Fiddles] Fiddle was updated successfully');
export const FIDDLE_UPDATED_FAIL = createAction('[Fiddles] Fiddle was not updated, error');

export const FIDDLE_REMOVED = createAction('[Fiddles] Fiddle is removing');
export const FIDDLE_REMOVED_SUCCESS = createAction('[Fiddles] Fiddle was removed successfully');
export const FIDDLE_REMOVED_FAIL = createAction('[Fiddles] Fiddle was not removed, error');
