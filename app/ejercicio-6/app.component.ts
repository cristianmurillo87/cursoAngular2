import {Component} from 'angular2/core';
import {PasswordComponent} from './password.component';

@Component({
    selector: 'my-app',
    template: 
    `
        <password></password>
    `,
    directives: [PasswordComponent]
})
export class AppComponent {

}