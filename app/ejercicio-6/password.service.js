System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordService;
    return {
        setters:[],
        execute: function() {
            PasswordService = (function () {
                function PasswordService() {
                }
                PasswordService.prototype.changePassword = function (form) {
                    var oldpass = form.currentpass;
                    if (oldpass == '12345')
                        return true;
                    else
                        return false;
                };
                return PasswordService;
            }());
            exports_1("PasswordService", PasswordService);
        }
    }
});
//# sourceMappingURL=password.service.js.map