import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-page/page-not-found.c';


/**
 * app路由
 */
const appRoutes: Routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    //{
    //    path: 'login',
    //    loadChildren: 'app/login/login.module#LoginModule'
    //},
    {
        path: 'app',
        loadChildren: 'app/theme/main.m#MainModule'
    },{
        path:'**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
