import {Component} from 'angular2/core';
import {SubscriptionComponent} from './subscription-form.component';

@Component({
    selector: 'my-app',
    template: 
    `
        <subscription></subscription>
    `,
    directives: [SubscriptionComponent]
})
export class AppComponent {

}