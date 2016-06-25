import {Component} from 'angular2/core';

@Component({
    selector: 'subscription',
    templateUrl:'app/subscription-form.template.html'
})
export class SubscriptionComponent{
    onSubmit(form){
        console.log(form);
    }
}