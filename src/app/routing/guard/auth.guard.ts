import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UserService } from '../../service';
import { DashboardComponent, LoginComponent } from '../../component';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.userService.isAuth()
      .pipe(
        first(),
        map((isAuth: boolean) => {
          if (route.component === DashboardComponent && !isAuth) {
            this.router.navigate(['/login']);
            return false;
          }
          if (route.component === LoginComponent) {
            if (isAuth) {
              this.router.navigate(['/dashboard']);
            }
            return !isAuth;
          }
          return isAuth;
        }),
      );
  }
}