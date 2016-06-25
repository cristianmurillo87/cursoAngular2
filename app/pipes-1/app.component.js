System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {TweetComponent} from './tweet.component';
            /*import {CoursesComponent} from './courses.component';
            import {AuthorComponent} from './authors.component';*/
            AppComponent = (function () {
                function AppComponent() {
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1)
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: /*propiedades con () indican EventBinding y  con []  PropertyBinding y {{}} es para imprimir text
                        cualquiera de los siguientes tres metodos son lo mismo
                        */ "\n    \t{{ course.title | lowercase}}\n        <br/>\n        {{ course.students | number }}\n        <br/>\n        {{ course.rating | number: '2.2-2'}}\n        <br/>\n        {{ course.price | currency: 'AUD':true:'2.2-2'}}\n        <br/>\n        {{ course.releaseDate | date:'yyyy MM'}}\n        <br/>\n        {{course | json}}\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map