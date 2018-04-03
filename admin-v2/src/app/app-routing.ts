import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-page/page-not-found.component';

/**
 * app路由
 */
export const appRoutes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
