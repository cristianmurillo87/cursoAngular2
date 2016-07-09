System.register(['angular2/core', './spinner.component'], function(exports_1, context_1) {
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
    var core_1, spinner_component_1;
    var MasterDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            MasterDetailComponent = (function () {
                function MasterDetailComponent() {
                    this.title = '';
                    this.body = '';
                    this.loading = true;
                    this.comments = [];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MasterDetailComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MasterDetailComponent.prototype, "body", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MasterDetailComponent.prototype, "loading", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MasterDetailComponent.prototype, "comments", void 0);
                MasterDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'master-detail',
                        templateUrl: 'app/master-detail.component.html',
                        styles: ["\n        .media-object{\n            border-radius: 100%;\n        }\n    "],
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MasterDetailComponent);
                return MasterDetailComponent;
            }());
            exports_1("MasterDetailComponent", MasterDetailComponent);
        }
    }
});
//# sourceMappingURL=master-detail.component.js.map