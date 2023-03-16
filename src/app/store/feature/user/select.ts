import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { userFeatureKey, } from './feature-key.const';

import { UserState } from './reducer';

import { LocalStorageService } from '../../../service';

export const userStateFeature = createFeatureSelector<UserState>(userFeatureKey);

export const selectToken = createSelector(
  userStateFeature,
  (state: UserState) => state.token || LocalStorageService.getToken(), // it's dirty becasue if we have token in LS but not in store we have to put it in store first and then select from there
);