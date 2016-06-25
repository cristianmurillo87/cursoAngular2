System.register(['angular2/core', 'rxjs/Observable', 'angular2/common', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/filter', 'rxjs/add/operator/map', 'rxjs/add/observable/fromArray'], function(exports_1, context_1) {
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
    var core_1, Observable_1, common_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -2; day <= -2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Observable_1.Observable.fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for date " + date);
                        return [1, 2, 3];
                    })
                        .subscribe(function (x) { return console.log(x); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form [ngFormModel]=\"form\">\n            <input type=\"text\" ngControl=\"search\" class=\"form-control\">\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=2.app.component.js.map