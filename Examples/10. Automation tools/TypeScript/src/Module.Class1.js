/**
* Created by pavelpat on 07.06.14.
*/
var Module;
(function (Module) {
    var Class1 = (function () {
        function Class1() {
        }
        Class1.prototype.alert = function () {
            alert('Hello world');
        };
        return Class1;
    })();
    Module.Class1 = Class1;
})(Module || (Module = {}));
//# sourceMappingURL=Module.Class1.js.map
