import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }   from './main.c';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'book', loadChildren: 'app/resource/book/book.m#BookModule' },
            { path: 'label', loadChildren: 'app/resource/label/label.m#LabelModule' },
            { path: 'category', loadChildren: 'app/resource/category/category.m#CategoryModule' },
            //{ path: 'member', loadChildren: 'app/people/member/member.m#MemberModule' },
            { path: 'role', loadChildren: 'app/people/role/role.module#RoleModule' },
            //{ path: 'right', loadChildren: 'app/people/right/right.m#RightModule' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MainRoutingModule { }
