import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthData } from '../types';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  login(body: IAuthData): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/v1/auth/login`, body);
  }

  loginByToken(): any {
    return this.http.get(`${environment.apiUrl}/api/v1/customers/me`);
  }
}