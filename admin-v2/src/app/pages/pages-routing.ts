import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';

/**
 * pages路由
 */
export const pagesRoutes: Routes = [
  {
    path: 'demo',
    loadChildren: 'app/pages/demo/demo.module#DemoModule'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'resource', pathMatch: 'full' },
      { path: 'resource', loadChildren: 'app/pages/resource/resource.module#ResourceModule' }
    ]
  }
];

export const PagesRoute: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
