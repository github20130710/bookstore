import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../../utils/auth-guard.service';
import { AuthService } from '../../utils/auth.service';

/**
 * demo路由
 */
const loginRoutes: Routes = [
  { path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(loginRoutes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard, AuthService ]
})

export class LoginRoutingModule {}
