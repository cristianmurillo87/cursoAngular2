import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';
import {LoginService} from './login.service';

@Component({
    selector:'signup-form',
    templateUrl:'app/sign-up.template.html',
    providers: [LoginService] 
})
export class SignUpFormComponent{

    form: ControlGroup;
    
    constructor(fb: FormBuilder, private login: LoginService){
        this.form= fb.group({
           username:['',Validators.compose([
               Validators.required,
               UsernameValidators.cannotContainSpace
           ]),Validators.composeAsync([
               UsernameValidators.shouldBeUnique, 
               UsernameValidators.shouldNotBeEmpty])],
           password: ['',Validators.required]
        });
    }
    
    signup(){
        
       console.log(this.form.value);
        var logged = this.login.doLogin(this.form.value);
        
        if(!logged){
            this.form.find('username').setErrors({
                invalidLogin:true
            });
        }
        
        
    }
    
}