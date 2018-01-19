import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MainData } from '../theme/main-data';

/**
 * 主体组件
 */
@Component({
    selector: 'sw-main',
    templateUrl: './main.c.html',
    styleUrls: ['./main.c.less']
})
export class MainComponent implements OnInit {

    //切换导航
    toggleDescTip: string = "点击关闭导航菜单";

    //切换导航标识
    navClose: boolean = false;

    mainData: MainData = {
        userData: {
            userName: "百变小咖",
            userAvatar: "./assets/img/user-header.png",
            mobilePhone: "1895090***2",
            email: "332557712@qq.com",
            positions: "Java工程师、打杂工程师",
        },
        menuData: [
            {
                "id": "010",
                "parentId": "0",
                "name": "BOOK",
                "keyWord": "book",
                "icon": 'fa-wrench',
                "isExpend": false,
                "children": [{
                    "id": "011",
                    "parentId": "010",
                    "name": "书籍",
                    "keyWord": "book",
                    "icon": 'fa-columns',
                    "url": '/app/book'
                }, {
                    "id": "012",
                    "parentId": "010",
                    "name": "标签",
                    "keyWord": "label",
                    "icon": 'fa-columns',
                    "url": '/app/label'
                }, {
                    "id": "013",
                    "parentId": "010",
                    "name": "分类",
                    "keyWord": "category",
                    "icon": 'fa-pie-chart',
                    "url": '/app/category'
                }]
            },
            {
                "id": "020",
                "parentId": "0",
                "name": "PEOPLE",
                "keyWord": "people",
                "icon": 'fa-cubes',
                "isExpend": false,
                "children": [
                    {
                        "id": "021",
                        "parentId": "020",
                        "name": "人员",
                        "keyWord": "member",
                        "icon": 'fa-cubes',
                        "url": '/app/member'
                    }, {
                        "id": "022",
                        "parentId": "020",
                        "name": "角色",
                        "keyWord": "role",
                        "icon": 'fa-cubes',
                        "url": '/app/role'
                    },
                    {
                        "id": "023",
                        "parentId": "020",
                        "name": "权限",
                        "keyWord": "right",
                        "icon": 'fa-clock-o',
                        "url": '/app/right'
                    }
                ]
            }
        ]
    };


    title: string = "首页";


    constructor(private router: Router) {
    }


    /**
     * 初始化
     */
    ngOnInit() {
    }

    /**
     * 切换导航
     */
    toggleNav() {
        this.navClose = !this.navClose;
        if (this.navClose) {
            this.toggleDescTip = "点击展开导航菜单";
        } else {
            this.toggleDescTip = "点击关闭导航菜单";
        }
    }

}
