import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppStoreModule } from './store/';
import { AppRoutingModule } from './routing/app-routing.module';
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
    RouterModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
