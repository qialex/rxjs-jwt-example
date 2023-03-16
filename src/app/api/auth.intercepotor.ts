import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { from, lastValueFrom } from "rxjs";
import { first, map } from 'rxjs/operators';

import { selectToken } from '../store/feature/user';

// TODO :  remove fake token
const fake_str = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJpZCI6ImJlNWI3MWI1LWJiMDktNDZkYi1hZTMzLTEwN2ViMmNmOWQ1MSIsImVtYWlsIjoidGVzdEBjaXJjbHkuYXQiLCJ1c2VybmFtZSI6IkZyb250ZW5kVGVzdCIsInBhc3N3b3JkIjoiJDJhJDA0JE56ZlhOTHRCeHY0c3Q1a2dJcERFSmU2djFlR2ZCN3VBcC9TQ0NNckhoSnRvWEVmbGRxUmRXIiwiY3JlYXRlZF9hdCI6IjIwMjMtMDMtMTNUMTA6MTI6NTguMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIzLTAzLTEzVDEwOjEyOjU4LjAwMFoiLCJkZWxldGVkX2F0IjpudWxsLCJ2ZXJzaW9uIjoxfSwiaWF0IjoxNjc4OTM1MTQ3LCJleHAiOjE2Nzg5Mzg3NDd9.IfJCuVIcKafQTbsY9TFdRCHpYqw0H0OWejLvc3gtUzc'


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private store: Store,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // convert promise to observable using 'from' operator
    return from(this.handle(req, next))
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {

    const token = await lastValueFrom(this.store.select(selectToken).pipe(first()));
    if (token) {
      req = req.clone({
        setHeaders: {
          'Authorization': `bearer ${token}`, 
          // 'Authorization': `bearer ${fake_str}`,  // try this to see that when token is expired user is redirected to login page
        }
      });
    }

    return await lastValueFrom(next.handle(req));
  }
}