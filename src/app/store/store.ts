import { ActionReducerMap } from '@ngrx/store';

import { userFeatureKey, initialUserState, userReducer, UserState } from './feature/user';

export interface AppState {
  [userFeatureKey]: UserState,
}

export const initialAppState: AppState = {
  [userFeatureKey]: initialUserState,
}

export const reducers: ActionReducerMap<AppState> = {
  [userFeatureKey]: userReducer,
};


