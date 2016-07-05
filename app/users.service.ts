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
        return this._http.get(this._url)
                .map(users => users.json());
    }

   getUser(id){
       var url = this._url + '/' + id;
        return this._http.get(url)
                .map(users => users.json());
    }

    saveUsers(form: any){

        var body = JSON.stringify({form});
        return this._http.post(this._url, body)
                .map(this.getResponse);

    }

    private getResponse(res: Response){   
        var response = res.json();
        return response.data || {};
    }
}
