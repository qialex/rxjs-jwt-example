import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, initialAppState } from './store';
import { UserEffects } from './feature/user';

@NgModule({
  imports: [
    StoreModule.forRoot(
      reducers, 
      {
        initialState: initialAppState,
      },
    ),
    EffectsModule.forRoot([UserEffects]),
  ],
})
export class AppStoreModule { }