import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AppComponent, DashboardComponent, LoginComponent } from '../component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  { 
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  { 
    path: 'login',
    canActivate: [AuthGuard],
    component: LoginComponent,
  },
  { 
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [
    AuthGuard,
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
