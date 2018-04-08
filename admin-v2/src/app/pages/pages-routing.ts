import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AuthGuardService } from '../utils/auth-guard.service';


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
    //canActivate: [ AuthGuardService ],
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { path: 'demo', loadChildren: 'app/pages/demo/demo.module#DemoModule' },
      { path: 'resource', loadChildren: 'app/pages/resource/resource.module#ResourceModule' }
    ]
  }
];

export const PagesRoute: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
