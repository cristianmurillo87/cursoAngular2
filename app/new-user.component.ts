import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {EmailValidator} from './emailValidator'

@Component({
    templateUrl:'app/new-user.component.html'
})
export class NewUserComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username:['',Validators.required],
            email:['', Validators.compose([
                Validators.required
                ])],
            phone:['', Validators.required],
            address:fb.group({
                street:['', Validators.compose([
                    Validators.required
                ])],
                suite:['', Validators.compose([
                    Validators.required
                ])],
                city:['', Validators.compose([
                    Validators.required
                ])],
                zipcode:['', Validators.compose([
                    Validators.required
                ])]                      
            })      

        },{
            validator: EmailValidator.emailValid
        });
    }

}