System.register(['angular2/core', 'angular2/common', './passwordValidator', './password.service'], function(exports_1, context_1) {
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
    var core_1, common_1, passwordValidator_1, password_service_1;
    var PasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidator_1_1) {
                passwordValidator_1 = passwordValidator_1_1;
            },
            function (password_service_1_1) {
                password_service_1 = password_service_1_1;
            }],
        execute: function() {
            PasswordComponent = (function () {
                function PasswordComponent(fb, pass) {
                    this.pass = pass;
                    this.form = fb.group({
                        currentpass: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])],
                        newpass: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(5)
                            ])],
                        confirmpass: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])
                        ]
                    }, {
                        validator: passwordValidator_1.PasswordValidator.shouldBeEqual
                    });
                }
                PasswordComponent.prototype.changePassword = function () {
                    console.log(this.form.value);
                    var changed = this.pass.changePassword(this.form.value);
                    if (!changed) {
                        this.form.find('currentpass').setErrors({
                            wrongPassword: true
                        });
                    }
                    else
                        alert('Contraseña actualizada exitosamente');
                };
                PasswordComponent = __decorate([
                    core_1.Component({
                        selector: 'password',
                        templateUrl: 'app/password.template.html',
                        providers: [password_service_1.PasswordService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, password_service_1.PasswordService])
                ], PasswordComponent);
                return PasswordComponent;
            }());
            exports_1("PasswordComponent", PasswordComponent);
        }
    }
});
//# sourceMappingURL=password.component.js.map