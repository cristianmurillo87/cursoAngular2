import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';


@RouteConfig([
    {path:'/', name: 'Home', component: HomeComponent, useAsDefault:true},
    {path:'/users', name: 'Users', component: UsersComponent},
    {path:'/posts', name: 'Posts', component: PostsComponent},
    {path:'/*other', name: 'Other', redirectTo:['Home']}
])
@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
    directives:[NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}