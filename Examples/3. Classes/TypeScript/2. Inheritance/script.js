/**
* Created by pavelpat on 03.06.14.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SomeClass = (function () {
    function SomeClass() {
        alert('Class constructor called!');
    }
    SomeClass.prototype.someMethod = function () {
        alert('someMethod() called');
    };

    SomeClass.someStaticMethod = function () {
        alert('someStaticMethod() called');
    };
    return SomeClass;
})();

var ChildSomeClass = (function (_super) {
    __extends(ChildSomeClass, _super);
    function ChildSomeClass() {
        _super.call(this);
    }
    ChildSomeClass.prototype.someMethod = function () {
        alert('overridden someMethod() called');
    };
    return ChildSomeClass;
})(SomeClass);

// Ок.
ChildSomeClass.someStaticMethod();

var c = new ChildSomeClass();

// Ок.
c.someMethod();
//# sourceMappingURL=script.js.map
