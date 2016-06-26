System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidator;
    return {
        setters:[],
        execute: function() {
            EmailValidator = (function () {
                function EmailValidator() {
                }
                EmailValidator.emailValid = function (control) {
                    var email = control.find('email').value;
                    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!filter.test(email)) {
                        return { emailValid: true };
                    }
                    return null;
                };
                return EmailValidator;
            }());
            exports_1("EmailValidator", EmailValidator);
        }
    }
});
//# sourceMappingURL=emailValidator.js.map