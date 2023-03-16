import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

import { setToken, setUser } from './action';

import { IUser } from '../../../types';

export interface UserState {
  data: IUser,
  token: string,
}

export const initialUserState: UserState = {
  data: {
    created_at: '',
    email: '',
    id: '',
    password: '',
    username: '',
  },
  token: '',
};

export const reducer: ActionReducer<UserState, Action> = createReducer(
  initialUserState,
  on(setToken, (state, { token }) => ({ ...state, token })),
  on(setUser, (state, { data }) => ({ ...state, data })),
);

export function userReducer(state: UserState = initialUserState, action: Action): UserState {
  return reducer(state, action);
}