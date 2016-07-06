import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {SpinnerComponent} from './spinner.component';
import {PostService} from './post.service';

@Component({
    templateUrl:'app/posts.component.html',
    directives: [SpinnerComponent],
    providers: [HTTP_PROVIDERS, PostService]
})
export class PostsComponent implements OnInit{
    posts: any [];
    isLoading = true;

    constructor(private _postService: PostService){

    }

    ngOnInit(){
        this._postService.getPosts()
        .subscribe(posts =>{
            this.posts = posts;
            this.isLoading = false;
        })
    }
}
