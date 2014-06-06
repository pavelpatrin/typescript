/**
* Created by pavelpat on 03.06.14.
*/
var SomeClass = (function () {
    function SomeClass() {
    }
    SomeClass.prototype.someMethod = function () {
        alert('someMethod() called');
    };

    SomeClass.prototype.somePrivateMethod = function () {
        alert('somePrivateMethod() called');
    };
    return SomeClass;
})();

var instance = new SomeClass();

// Ок.
instance.someMethod();
// Ошибка компиляции.
//instance.somePrivateMethod();
//# sourceMappingURL=script.js.map
