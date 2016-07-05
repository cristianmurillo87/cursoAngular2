System.register(['angular2/core', 'angular2/common', 'angular2/http', 'angular2/router', './emailValidator', './users.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, router_1, emailValidator_1, users_service_1, user_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (emailValidator_1_1) {
                emailValidator_1 = emailValidator_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(fb, _userService, _router, _params) {
                    this._userService = _userService;
                    this._router = _router;
                    this._params = _params;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        username: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])],
                        phone: ['', common_1.Validators.required],
                        address: fb.group({
                            street: ['', common_1.Validators.compose([
                                    common_1.Validators.required
                                ])],
                            suite: ['', common_1.Validators.compose([
                                    common_1.Validators.required
                                ])],
                            city: ['', common_1.Validators.compose([
                                    common_1.Validators.required
                                ])],
                            zipcode: ['', common_1.Validators.compose([
                                    common_1.Validators.required
                                ])]
                        })
                    }, {
                        validator: emailValidator_1.EmailValidator.emailValid
                    });
                }
                NewUserComponent.prototype.save = function () {
                    var _this = this;
                    this._userService.saveUsers(this.form.value)
                        .subscribe(function (res) {
                        _this._router.navigate(['Users']);
                    });
                };
                NewUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    /*console.log("next", next);
                    console.log("previous", previous);*/
                    if (this.form.dirty && !this.form.valid) {
                        return confirm("Tiene datos sin guardar. Esta seguro que desea salir del formulario?");
                    }
                    return true;
                };
                NewUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._params.get("id");
                    this.title = id ? "Editar Usuario" : "Agregar Usuario";
                    if (!id) {
                        return;
                    }
                    this._userService.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404)
                            _this._router.navigate(['NotFound']);
                    });
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/new-user.component.html',
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.RouteParams])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=new-user.component.js.map