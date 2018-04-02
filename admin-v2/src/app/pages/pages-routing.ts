import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component';

/**
 * pages路由
 */
export const pagesRoutes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'demo', pathMatch: 'full' },
      { path: 'demo', loadChildren: 'app/pages/demo/demo.module#DemoModule' },
      { path: 'resource', loadChildren: 'app/pages/resource/resource.module#ResourceModule' }
    ]
  }
];

export const PagesRoute: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
