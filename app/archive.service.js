System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArchiveService;
    return {
        setters:[],
        execute: function() {
            ArchiveService = (function () {
                function ArchiveService() {
                }
                ArchiveService.prototype.getArchives = function () {
                    var archives = [
                        { title: '2016/1', year: '2016', month: '1' },
                        { title: '2016/2', year: '2016', month: '2' },
                        { title: '2016/3', year: '2016', month: '3' }
                    ];
                    return archives;
                };
                ArchiveService.prototype.getArchive = function (year, month) {
                    return year + '/' + month;
                };
                return ArchiveService;
            }());
            exports_1("ArchiveService", ArchiveService);
        }
    }
});
//# sourceMappingURL=archive.service.js.map