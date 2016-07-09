import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() 
export class UsersService{
    private _url = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){

    }

    getUsers(){
        return this._http.get(this._url).map(users => users.json());
    }

   getUser(id){
        return this._http.get(this.getUserUrl(id)).map(users => users.json());
    }

    saveUsers(user){

        var body = JSON.stringify({user});
        return this._http.post(this._url, body).map(users => users.json());

    }

    editUser(user){
        var body = JSON.stringify({user});
        return this._http.put(this.getUserUrl(user.id), body).map(users => users.json());
    }

    deleteUser(id){
        return this._http.delete(this.getUserUrl(id)).map(users => users.json());;
    }

    private getUserUrl(id){
        return this._url + '/' + id;
    }

}
