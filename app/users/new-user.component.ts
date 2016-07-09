import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, CanDeactivate, RouteParams} from 'angular2/router';
import {EmailValidator} from './emailValidator';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    templateUrl:'app/new-user.component.html',
    providers: [UsersService, HTTP_PROVIDERS]
})
export class NewUserComponent implements CanDeactivate, OnInit{
    form: ControlGroup;
    title: string;
    user = new User();

    constructor(fb: FormBuilder, 
                    private _userService: UsersService, 
                    private _router: Router,
                    private _params: RouteParams){
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

    save(){
        	
            if(this.user.id){
                this._userService.editUser(this.user);
            }
            else{
                this._userService.saveUsers(this.user);
            }

            this._router.navigate(['Users']);
            
    }

    
    routerCanDeactivate(next, previous){
        /*console.log("next", next);
        console.log("previous", previous);*/

        if (this.form.dirty && !this.form.valid){ 
            return confirm("Tiene datos sin guardar. Esta seguro que desea salir del formulario?")
        }

        return true;
    }

    ngOnInit(){
        var id = this._params.get("id");

        this.title = id ? "Editar Usuario" : "Agregar Usuario";

        if(!id){
            return;
        }

        this._userService.getUser(id)
            .subscribe(
                user =>this.user = user,
                response =>{
                    if (response.status == 404)
                        this._router.navigate(['NotFound']);
                });
        
    }


}