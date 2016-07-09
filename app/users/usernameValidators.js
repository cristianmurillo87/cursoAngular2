System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "cristian")
                                resolve({ shouldBeUnique: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                UsernameValidators.shouldNotBeEmpty = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value.length == 0)
                                resolve({ shouldNotBeEmpty: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                UsernameValidators.shouldBeEqual = function (group) {
                    var newpass = group.find('newpass');
                    var confirmpass = group.find('confirmpass');
                    if (newpass.value != confirmpass.value) {
                        return { shouldBeEqual: true };
                    }
                    return null;
                };
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0) {
                        return { cannotContainSpace: true };
                    }
                    return null;
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map