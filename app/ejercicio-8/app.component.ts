import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ArchiveComponent} from './archive.component';
import {ArchivesComponent} from './archives.component';


@RouteConfig([
    {path:'/', name:'Archives', component: ArchivesComponent, useAsDefault:true },
    {path:'/archives/:year/:month', name:'Archive', component: ArchiveComponent },
    {path:'/*other', name:'Other', redirectTo:['Archives'] }
])
@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})
export class AppComponent {
    
}