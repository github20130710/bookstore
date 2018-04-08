import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing';
import { AuthGuardService } from '../../utils/auth-guard.service';
import { AuthService } from '../../utils/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [ AuthGuardService, AuthService ]
})
export class LoginModule {
}
