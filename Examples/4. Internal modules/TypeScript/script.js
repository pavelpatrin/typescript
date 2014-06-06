/**
* Created by pavelpat on 03.06.14.
*/
var WebApp;
(function (WebApp) {
    /**
    * Публичная переменная модуля.
    */
    WebApp.SomeVar = 'Hello world!';

    /**
    * Публичная функция модуля
    */
    function SomeFunc() {
        alert('Called');
    }
    WebApp.SomeFunc = SomeFunc;

    /**
    * Публичный класс модуля.
    */
    var SomeClass = (function () {
        function SomeClass() {
            alert('Instantiated');
        }
        SomeClass.prototype.alert = function () {
            alert('Alert called');
        };
        return SomeClass;
    })();
    WebApp.SomeClass = SomeClass;

    /**
    *
    */
    function PrivateFunc() {
        alert('PrivateFunc called');
    }
})(WebApp || (WebApp = {}));

// Доступ к переменной из пространства имен.
WebApp.SomeVar = 'Hello moto!';

// Вызов функции из пространства имен.
WebApp.SomeFunc();

// Ошибка компиляции.
//WebApp.PrivateFunc();
// Инстанцирование класса из пространства имен.
var instance = new WebApp.SomeClass();
instance.alert();

// Импортирование части модуля.
var SomeClass1 = WebApp.SomeClass;
new SomeClass1();

var SomeClass2 = WebApp.SomeClass;
new SomeClass2;
//# sourceMappingURL=script.js.map
