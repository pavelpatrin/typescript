/**
* Created by pavelpat on 03.06.14.
*/
var SomeSingleton = (function () {
    function SomeSingleton() {
    }
    SomeSingleton.getInstance = function () {
        if (!SomeSingleton.instance) {
            SomeSingleton.instance = new SomeSingleton();
        }

        return SomeSingleton.instance;
    };

    SomeSingleton.prototype.sayHello = function () {
        alert('Hello');
    };
    return SomeSingleton;
})();

var instance = SomeSingleton.getInstance();
instance.sayHello();
//# sourceMappingURL=script.js.map
