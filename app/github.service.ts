import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable' 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Injectable} from 'angular2/core';

@Injectable()
export class GitHubservice{

    private _url = "https://api.github.com/users/";

    constructor(private _http: Http){
    }
    
    getUser(username) {
        return this._http.get(this._url + username)
            .map(res=> res.json());
    }

    getFollowers(username){
        return this._http.get(this._url + username + "/followers")
        .delay(5000)// este delay solo lo hice por probar.
        .map(res=> res.json());
    }

    
}