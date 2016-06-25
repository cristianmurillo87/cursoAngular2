import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';

@Component({
    selector:'signup-form',
    templateUrl:'app/sign-up.template.html'
})
export class SignUpFormComponent{
    form = new ControlGroup({
        username: new Control('',Validators.required),
        password: new Control('',Validators.required)
    });
    
    signup(){
        console.log(this.form.value);
    }
    
}