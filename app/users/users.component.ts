import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UsersService} from './users.service';


@Component({
    templateUrl : 'app/users/users.component.html',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit{
    users: any [];

    constructor( private _usersService: UsersService){

    }

    deleteUser(user){
        
        if(confirm('Desea Eliminar al usuario ' + user.name + ' ?')){
            var id = user.id;
            this._usersService.deleteUser(id)
            .subscribe(
                response =>{
                    var index = this.users.indexOf(user);
                    this.users.splice(index, 1);
                },
                error =>{
                    console.log(error);
                }
            );
        }

    }

    ngOnInit(){
       this._usersService.getUsers()
        .subscribe(users =>{
            this.users = users;
        });
    }
}
