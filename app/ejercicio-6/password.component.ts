import{Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidator} from './passwordValidator'
import {PasswordService} from './password.service'

@Component({
    selector:'password',
    templateUrl : 'app/password.template.html',
    providers: [PasswordService]
})
export class PasswordComponent{
    form: ControlGroup;
    
    constructor(fb: FormBuilder, private pass: PasswordService){
        this.form = fb.group({
            currentpass:['',Validators.compose([
                        Validators.required
                    ]        
            )],
            newpass:['', Validators.compose([
                        Validators.required,
                        Validators.minLength(5)
                    ]
            )],
            confirmpass:['', Validators.compose([
                            Validators.required                          
            ])
                
            ]
        },
        {
            validator: PasswordValidator.shouldBeEqual
        })
    }

    changePassword(){
        console.log(this.form.value);
        var changed = this.pass.changePassword(this.form.value);

        if(!changed){
            this.form.find('currentpass').setErrors({
                wrongPassword:true
            });
        }
        
        else
            alert('Contraseña actualizada exitosamente')

    }
}