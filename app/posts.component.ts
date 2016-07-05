import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PostService} from './post.service';

@Component({
    templateUrl:'app/posts.component.html',
    providers: [HTTP_PROVIDERS, PostService]
})
export class PostsComponent implements OnInit{
    posts: any [];

    constructor(private _postService: PostService){

    }

    ngOnInit(){
        this._postService.getPosts()
        .subscribe(posts =>{
            this.posts = posts;
        })
    }
}
