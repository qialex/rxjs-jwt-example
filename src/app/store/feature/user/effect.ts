import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { setToken } from './action';
import { LocalStorageService } from '../../../service';
 
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}
  
  logActions$ = createEffect(() =>
    this.actions$.pipe(
      tap(action => console.log(action))
    ), { dispatch: false });

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setToken.type),
      tap(({token}) => {
        LocalStorageService.setToken(token);
      })
    ),
  { dispatch: false });    
}