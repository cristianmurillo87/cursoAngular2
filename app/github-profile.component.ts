import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {GitHubservice} from './github.service';

@Component({
        selector: 'github-profile',
        styles : [`
            .avatar {
                width: 100;
                height: 100;
                border-radius: 100%;
            }
        `],
        template: `
            <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
            <h2>{{user.login}}</h2>
            <img class="avatar" src="{{user.avatar_url}}" alt="{{user.login}}">

            <h3>Seguidores</h3>
            
            <div *ngFor="#follower of followers">
                <br>
                <div class="media">
                    <div class="media-left">
                        <a href="#">
                            <img class="avatar" src="{{follower.avatar_url}}" alt="{{follower.login}}">
                        </a>
                    </div>
                    <div class="media-body">
                        <h5 class="media-heading">{{follower.login}}</h5>
                    </div>
                </div>
            </div>
        `,
        providers: [GitHubservice,HTTP_PROVIDERS] 
})
export class GitHubComponent implements OnInit{

    user = {};
    followers=[];
    isLoading = true;
    username = "octocat";
    
    constructor(private _githubService: GitHubservice){
    }

    ngOnInit(){
        Observable.forkJoin(
            this._githubService.getUser(this.username),
            this._githubService.getFollowers(this.username)
        )
        .subscribe(
            res => {
                this.user = res[0],
                this.followers = res[1]
            },
            null,
            ()=> {this.isLoading=false;});
    }
}

