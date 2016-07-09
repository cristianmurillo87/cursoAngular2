System.register(['angular2/core', 'angular2/http', './master-detail.component', './pagination.component', './spinner.component', './post.service', './users.service', './post'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, master_detail_component_1, pagination_component_1, spinner_component_1, post_service_1, users_service_1, post_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (master_detail_component_1_1) {
                master_detail_component_1 = master_detail_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.posts = [];
                    this.selectedPost = new post_1.Post();
                    this.postsPerPage = 10;
                    this.pagedPosts = [];
                }
                PostsComponent.prototype.getComments = function (post) {
                    var _this = this;
                    this.commentsLoading = true;
                    this.currentComments = null;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) {
                        _this.currentComments = comments;
                    }, null, function () { _this.commentsLoading = false; });
                };
                PostsComponent.prototype.getPosts = function (filter) {
                    var _this = this;
                    this.postLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        _this.pagedPosts = _.take(_this.posts, _this.postsPerPage);
                    }, null, function () {
                        _this.postLoading = false;
                    });
                };
                PostsComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                    });
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.selectedPost = null;
                    this.isClicked = false;
                    this.getPosts(filter);
                };
                PostsComponent.prototype.setPost = function (post) {
                    this.selectedPost = post;
                    this.isClicked = true;
                    this.getComments(post);
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    var startIndex = (page - 1) * this.postsPerPage;
                    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.postsPerPage);
                };
                PostsComponent.prototype.ngOnInit = function () {
                    this.getPosts();
                    this.getUsers();
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts.component.html',
                        styles: ["\n         li { cursor: default; }\n         li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "],
                        directives: [spinner_component_1.SpinnerComponent, master_detail_component_1.MasterDetailComponent, pagination_component_1.PaginationComponent],
                        providers: [http_1.HTTP_PROVIDERS, post_service_1.PostService, users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, (typeof (_a = typeof users_service_1.UsersService !== 'undefined' && users_service_1.UsersService) === 'function' && _a) || Object])
                ], PostsComponent);
                return PostsComponent;
                var _a;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map