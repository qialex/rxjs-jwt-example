import { createAction, props } from '@ngrx/store';
import { userFeatureKey } from './feature-key.const';
import { IUser } from '../../../types';

export const setToken = createAction(
  `[${userFeatureKey}] setToken`,
  props<{ token: string; }>()
);

export const setUser = createAction(
  `[${userFeatureKey}] setUser`,
  props<{ data: IUser; }>()
);