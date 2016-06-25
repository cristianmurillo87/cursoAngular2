System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginService;
    return {
        setters:[],
        execute: function() {
            LoginService = (function () {
                function LoginService() {
                }
                LoginService.prototype.doLogin = function (login) {
                    var username = login.nombreusuario;
                    var password = login.contrasena;
                    if (username != "cristian" || password != "123456")
                        return false;
                    else
                        return true;
                };
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map