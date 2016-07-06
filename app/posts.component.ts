import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MasterDetailComponent} from './master-detail.component';
import {SpinnerComponent} from './spinner.component';
import {PostService} from './post.service';
import {UsersService} from './users.service';
import {Post} from './post';



@Component({
    templateUrl:'app/posts.component.html',
    styles : [`
         li { cursor: default; }
         li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `], 
    directives: [SpinnerComponent, MasterDetailComponent],
    providers: [HTTP_PROVIDERS, PostService, UsersService]
})
export class PostsComponent implements OnInit{
    posts: any [];
    users: any[];
    postLoading = true;
    selectedPost = new Post();
    currentComments: any[];
    commentsLoading = true;
    isClicked = false;

    constructor(private _postService: PostService, private _userService: UsersService){

    }

    getComments(post){
        this._postService.getComments(post.id)
        .subscribe(comments=>{
            this.currentComments = comments;
            this.commentsLoading = false;
        },
        error=>{
            alert(error);
        })
    }

    getPosts(){
        this._postService.getPosts()
        .subscribe(posts =>{
              this.posts = posts;
        });

        this.postLoading = false;
    }

    reloadPosts(id){
        this.postLoading = true;
        if(id==""){
            this.getPosts();
        }
        else{
            this._postService.getUserPosts(id)
            .subscribe(posts=>{
                console.log(posts);
                this.posts = posts;
            });
        }
         this.postLoading = false;   
    }

    setPost(post){
        this.selectedPost = post;
        this.getComments(post);
        if(!this.isClicked)
            this.isClicked = true;
    }

    ngOnInit(){

        this.getPosts();

        this._userService.getUsers()
        .subscribe(users=>{
            this.users = users;
        })
    }
}
