import {Component} from 'angular2/core';
import {SignUpFormComponent} from './sign-up.component';

@Component({
    selector: 'my-app',
    template: 
    `
        <signup-form></signup-form>
    `,
    directives: [SignUpFormComponent]
})
export class AppComponent {

}