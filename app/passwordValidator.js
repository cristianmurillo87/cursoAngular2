System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidator;
    return {
        setters:[],
        execute: function() {
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.shouldBeEqual = function (group) {
                    var newpass = group.find('newpass').value;
                    var confirmpass = group.find('confirmpass').value;
                    if (confirmpass.length > 0 && newpass.length > 0 && newpass != confirmpass) {
                        return { shouldBeEqual: true };
                    }
                    return null;
                };
                return PasswordValidator;
            }());
            exports_1("PasswordValidator", PasswordValidator);
        }
    }
});
//# sourceMappingURL=passwordValidator.js.map