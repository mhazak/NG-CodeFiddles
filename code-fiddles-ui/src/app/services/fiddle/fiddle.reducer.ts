import { createReducer, on } from '@ngrx/store';
import * as FiddleActions from './fiddle.actions';
import { FiddleModel } from './fiddle.model';

export interface State {
	availableFiddles: FiddleModel[],
	addedFiddle: FiddleModel,
	updatingFiddleId: string,
	error: string
}

const initialState: State = {
	availableFiddles: null,
	addedFiddle: null,
	updatingFiddleId: '',
	error: ''
};

export const fiddleReducer = createReducer(initialState,
	on(FiddleActions.LOAD_FIDDLES_SUCCESS, (state, { fiddles } ) => {
		return {
			...state,
			availableFiddles: fiddles
		}
	})
	// on(FiddleActions.FIDDLE_ADDED_SUCCESS, (state) => state.av)
)
