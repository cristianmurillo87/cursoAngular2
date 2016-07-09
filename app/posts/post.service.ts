import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable' 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Injectable} from 'angular2/core';
import {Post} from './post'

@Injectable()
export class PostService{

    private _url = "http://jsonplaceholder.typicode.com/posts";


    constructor(private _http: Http){
    }
    
    getPosts(filter?){

        if(filter && filter.userId){
            return this._http.get(this._url+'?userId='+filter.userId).map(res=> res.json());
        }
        return this._http.get(this._url).map(res=> res.json());
            
    }


    createPost(post){
        this._http.post(this._url, JSON.stringify(post))
            .map(res=> res.json());

    }

    getComments(id){
        return this._http.get(this.getUrl(id)).map(res=>res.json());
    }

    private getUrl(id){
        return this._url+'/'+id+'/comments';
    }
}