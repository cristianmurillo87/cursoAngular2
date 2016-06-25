System.register(['angular2/core', './archive.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, archive_service_1, router_1;
    var ArchivesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (archive_service_1_1) {
                archive_service_1 = archive_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ArchivesComponent = (function () {
                function ArchivesComponent(_archiveService) {
                    this._archiveService = _archiveService;
                }
                ArchivesComponent.prototype.ngOnInit = function () {
                    this.archives = this._archiveService.getArchives();
                };
                ArchivesComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n            <h1>Inicio</h1>\n            <ul >\n                <li *ngFor=\"#archive of archives\">\n                    <a [routerLink]=\"['Archive',{year: archive.year, month: archive.month}]\">\n                        {{archive.title}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    ",
                        directives: [router_1.RouterLink],
                        providers: [archive_service_1.ArchiveService]
                    }), 
                    __metadata('design:paramtypes', [archive_service_1.ArchiveService])
                ], ArchivesComponent);
                return ArchivesComponent;
            }());
            exports_1("ArchivesComponent", ArchivesComponent);
        }
    }
});
//# sourceMappingURL=archives.component.js.map