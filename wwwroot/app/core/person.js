System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Person;
    return {
        setters:[],
        execute: function() {
            Person = (function () {
                function Person() {
                }
                Object.defineProperty(Person.prototype, "Name", {
                    get: function () {
                        return this.first + ' ' + this.last;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Person;
            }());
            exports_1("Person", Person);
        }
    }
});
//# sourceMappingURL=Person.js.map