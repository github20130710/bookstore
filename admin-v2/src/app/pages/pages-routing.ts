import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../utils/auth-guard.service';
import { AuthService } from '../utils/auth.service';


/**
 * pages路由
 */
export const pagesRoutes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { path: 'demo', loadChildren: 'app/pages/demo/demo.module#DemoModule' },
      { path: 'resource', loadChildren: 'app/pages/resource/resource.module#ResourceModule', canLoad: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(
    pagesRoutes, {
      enableTracing: true // <-- debugging purposes only
    }
  )],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    AuthService
  ]
})

export class PagesRoutingModule {

}
