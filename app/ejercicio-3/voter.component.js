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
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.voteCount = 10;
                    this.myVote = 0;
                    this.votedUp = false;
                    this.votedDown = false;
                }
                VoterComponent.prototype.onUpClick = function () {
                    this.votedUp = !this.votedUp;
                    this.votedDown = false;
                    this.myVote = this.voteCount > 10 ? 0 : 1;
                    this.voteCount += this.myVote;
                };
                VoterComponent.prototype.onDownClick = function () {
                    this.votedDown = !this.votedDown;
                    this.votedUp = false;
                    this.myVote = this.voteCount < 10 ? 0 : -1;
                    this.voteCount += this.myVote;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], VoterComponent.prototype, "myVote", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        templateUrl: 'app/voter.template.html',
                        styles: ["\n\t\t.container{\n\t\t\twidth: 20px;\n\t\t}\n\n\t\t.glyphicon-menu-up{\n\t\t\tcursor: pointer;\n\t\t\tcolor : #ccc;\n\t\t}\n\n\t\t.glyphicon-menu-down{\n\t\t\tcursor: pointer;\n\t\t\tcolor : #ccc;\n\t\t}\n\n\t\t.highlighted{\n\t\t\tcolor: yellow;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map