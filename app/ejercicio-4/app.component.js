System.register(['angular2/core', './zippy.component'], function(exports_1, context_1) {
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
    var core_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.zippys = [
                        {
                            title: "Titulo para el panel #1",
                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor lorem, euismod ut leo eu, posuere mollis sapien. Integer vehicula rhoncus felis, lacinia imperdiet velit luctus ac. Maecenas eu ligula eu odio mollis euismod facilisis at lacus. Fusce varius tincidunt libero non finibus. Curabitur euismod felis vel magna hendrerit fermentum. Nunc nec venenatis nisl, in lacinia ex. Duis imperdiet eu nisi vel ullamcorper. Sed vel lectus non ante vestibulum hendrerit. Vivamus eu nunc placerat, facilisis dui vel, molestie nunc. Praesent interdum sit amet libero sed efficitur. Donec sit amet dolor tincidunt, efficitur libero quis, ultrices quam. Integer bibendum porta purus. Proin semper luctus enim id blandit."
                        },
                        {
                            title: "Titulo para el panel #2",
                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor lorem, euismod ut leo eu, posuere mollis sapien. Integer vehicula rhoncus felis, lacinia imperdiet velit luctus ac. Maecenas eu ligula eu odio mollis euismod facilisis at lacus. Fusce varius tincidunt libero non finibus. Curabitur euismod felis vel magna hendrerit fermentum. Nunc nec venenatis nisl, in lacinia ex. Duis imperdiet eu nisi vel ullamcorper. Sed vel lectus non ante vestibulum hendrerit. Vivamus eu nunc placerat, facilisis dui vel, molestie nunc. Praesent interdum sit amet libero sed efficitur. Donec sit amet dolor tincidunt, efficitur libero quis, ultrices quam. Integer bibendum porta purus. Proin semper luctus enim id blandit."
                        },
                        {
                            title: "Titulo para el panel #3",
                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor lorem, euismod ut leo eu, posuere mollis sapien. Integer vehicula rhoncus felis, lacinia imperdiet velit luctus ac. Maecenas eu ligula eu odio mollis euismod facilisis at lacus. Fusce varius tincidunt libero non finibus. Curabitur euismod felis vel magna hendrerit fermentum. Nunc nec venenatis nisl, in lacinia ex. Duis imperdiet eu nisi vel ullamcorper. Sed vel lectus non ante vestibulum hendrerit. Vivamus eu nunc placerat, facilisis dui vel, molestie nunc. Praesent interdum sit amet libero sed efficitur. Donec sit amet dolor tincidunt, efficitur libero quis, ultrices quam. Integer bibendum porta purus. Proin semper luctus enim id blandit."
                        }
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<zippy *ngFor= \"#zippy of zippys\" title={{zippy.title}}>\n            {{zippy.body}}\n        </zippy>\n    ",
                        directives: [zippy_component_1.ZippyComponent]
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