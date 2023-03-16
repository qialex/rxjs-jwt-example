import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { selectToken } from '../store/feature/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map, catchError } from 'rxjs/operators';
import { ApiService } from '../api';
import { setToken, setUser } from '../store/feature/user'
import { IAuthData, IUser } from '../types';
import { from, lastValueFrom } from "rxjs";

@Injectable()
export class UserService {
  constructor(
    private router: Router,
    private store: Store,
    private apiService: ApiService,
  ) {}

  isAuth(): Observable<boolean> {
    return from(this.processAuth());
  }

  async processAuth(): Promise<boolean> {
    const token = await lastValueFrom(this.store.select(selectToken).pipe(first()));

    if (token) {
      try {
        const data: IUser = await lastValueFrom(this.apiService.loginByToken().pipe(first()));
        this.store.dispatch(setUser({data}));
        return true;
      } catch (e: any) {
        console.error(e);
        this.store.dispatch(setToken({token: ''}))
        return false;
      }
    }

    return false;
  }

  async auth(body: IAuthData): Promise<{status: number, error?: string}> {
      try {
        const result = await lastValueFrom(this.apiService.login(body).pipe(first()));
        if (result['jwt']) {
          this.store.dispatch(setToken({token: result['jwt']}));
          this.router.navigate(['dashboard']);
          return {status: 200};
        } else {
          return {status: 400, error: 'passedButNoToken'};
        }
      } catch (e: any) {
        console.error(e);
        return {status: e.status as number, error: `error_${e.message}`};
      }      
  }

  logout(): void {
    this.store.dispatch(setToken({token: ''}));
    this.router.navigate(['login']);
  }
}