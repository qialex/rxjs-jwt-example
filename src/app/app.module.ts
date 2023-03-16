import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppStoreModule } from './store/';
import { AppRoutingModule } from './routing/app-routing.module';
import { ApiService, AuthInterceptor } from './api';
import { UserService } from './service';
import { AppComponent, DashboardComponent, LoginComponent } from './component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ApiService,
    UserService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
