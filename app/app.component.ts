import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import {NewUserComponent} from './new-user.component';
import {NotFoundComponent} from './not-found.component';


@RouteConfig([
    {path:'/', name: 'Home', component: HomeComponent, useAsDefault:true},
    {path:'/users', name: 'Users', component: UsersComponent},
    {path:'/users/new', name:'NewUser', component: NewUserComponent},
    {path:'/users/edit/:id', name:'EditUser', component: NewUserComponent},
    {path:'/posts', name: 'Posts', component: PostsComponent},
    {path:'/not-found', name: 'NotFound', component: NotFoundComponent},
    {path:'/*other', name: 'Other', redirectTo:['Home']}
])
@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
    directives:[NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}