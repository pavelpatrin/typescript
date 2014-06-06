/**
* Created by pavelpat on 03.06.14.
*/
var SomeClass = (function () {
    function SomeClass() {
        this._property = 'Test';
        alert('Class constructor called!');
    }
    SomeClass.prototype.someMethod = function () {
        alert('someMethod() called');
        //        (() => {
        //            alert(this);
        //        })();
        //
        //        (function() {
        //            alert(this);
        //        })();
        //
        //        document.querySelector('body').addEventListener('click', () => {
        //            this.property = '12345';
        //        });
    };

    SomeClass.someStaticMethod = function () {
        alert('someStaticMethod() called');
    };

    SomeClass.somePrivateStaticMethod = function () {
        alert('somePrivateStaticMethod() called');
    };

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

// Ок.
//SomeClass.someStaticMethod();
// Ошибка компиляции.
//SomeClass.somePrivateStaticMethod();
(new SomeClass()).someMethod();
//# sourceMappingURL=script.js.map
