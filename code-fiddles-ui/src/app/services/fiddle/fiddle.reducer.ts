import { createReducer, on } from '@ngrx/store';
import * as FiddleActions from './fiddle.actions';
import { FiddleModel } from './fiddle.model';

export interface State {
	availableFiddles: FiddleModel[],
	addedFiddle: FiddleModel,
	updatingFiddleId: string,
	error: string,
	loading: boolean
}

const initialState: State = {
	availableFiddles: null,
	addedFiddle: null,
	updatingFiddleId: '',
	error: '',
	loading: false
};

export const fiddleReducer = createReducer(initialState,
	on(FiddleActions.LOAD_FIDDLES, (state, { loading }) => {
		return {
			...state,
			loading: loading
		}
	}),
	on(FiddleActions.LOAD_FIDDLES_SUCCESS, (state, { fiddles } ) => {
		return {
			...state,
			availableFiddles: fiddles
		}
	}),
	on(FiddleActions.LOAD_FIDDLES_FAIL, (state, { error }) => {
		return {
			...state,
			error: error
		}
	}),
	on(FiddleActions.FIDDLE_ADDED, (state, { fiddle }) => {
		return {
			...state,
			addedFiddle: fiddle,
			loading: true
		}
	}),
	on(FiddleActions.FIDDLE_ADDED_SUCCESS, (state) => {
		return {
			...state,
			addedFiddle: null,
			loading: false
		}
	}),
	on(FiddleActions.FIDDLE_ADDED_FAIL, (state, { error }) => {
		return {
			...state,
			addedFiddle: null,
			loading: false,
			error: error
		}
	})
	// on(FiddleActions.FIDDLE_ADDED_SUCCESS, (state) => state.av)
)
