
import {Component} from 'angular2/core';
import {GitHubComponent} from './github-profile.component';

@Component({
    selector: 'my-app',
    template: `
        <github-profile></github-profile>
    `,
    directives: [GitHubComponent] 
})
export class AppComponent {
}