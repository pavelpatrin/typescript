/**
* Created by pavelpat on 03.06.14.
*/
var SomeClass = (function () {
    function SomeClass() {
    }
    Object.defineProperty(SomeClass.prototype, "property", {
        /**
        * Аксессор свойства.
        */
        get: function () {
            return this._property;
        },
        /**
        * Мутатор свойства.
        */
        set: function (value) {
            this._property = value;
        },
        enumerable: true,
        configurable: true
    });

    return SomeClass;
})();

var instance = new SomeClass();
instance.property = "Hello world";

alert(instance.property);
//# sourceMappingURL=script.js.map
