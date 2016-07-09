import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MasterDetailComponent} from '../posts/master-detail.component';
import {PaginationComponent} from '../shared/pagination.component';
import {SpinnerComponent} from '../shared/spinner.component';
import {PostService} from '../posts/post.service';
import {UsersService} from '../users/users.service';
import {Post} from './post';



@Component({
    templateUrl:'app/posts/posts.component.html',
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
    directives: [SpinnerComponent, MasterDetailComponent, PaginationComponent],
    providers: [HTTP_PROVIDERS, PostService, UsersService]
})
export class PostsComponent implements OnInit{
    posts: any []=[];
    users: any[];
    postLoading;
    selectedPost = new Post();
    currentComments: any[];
    commentsLoading;
    isClicked;
    postsPerPage= 10;
    pagedPosts=[];



    constructor(private _postService: PostService, private _userService: UsersService){

    }

    private getComments(post){
        this.commentsLoading = true;
        this.currentComments = null;
        this._postService.getComments(post.id)
        .subscribe(comments=>{
            this.currentComments = comments;          
        },null,
        ()=>{this.commentsLoading = false;});
    }

    private getPosts(filter?){
        this.postLoading = true;
        this._postService.getPosts(filter)
        .subscribe(posts =>{
              this.posts = posts;
              this.pagedPosts = _.take(this.posts, this.postsPerPage);
        }, null,
        ()=>{ 
            this.postLoading = false;
        });

    }

    private getUsers(){
        this._userService.getUsers()
        .subscribe(users=>{
            this.users = users;
        });
    }

    reloadPosts(filter){
        this.selectedPost = null;
        this.isClicked = false;
        this.getPosts(filter);
    }

    setPost(post){
        this.selectedPost = post;
        this.isClicked = true;
        this.getComments(post);
        
    }

    onPageChanged(page){
        var startIndex = (page-1) * this.postsPerPage;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.postsPerPage);
    }

    ngOnInit(){
        this.getPosts();
        this.getUsers();
    }
}
