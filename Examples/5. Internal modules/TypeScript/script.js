/**
* Created by pavelpat on 03.06.14.
*/
var Some;
(function (Some) {
    (function (Module) {
        /**
        * Публичная переменная модуля.
        */
        Module.SomeVar = 'Hello world!';

        /**
        * Публичная функция модуля
        */
        function SomeFunc() {
            alert('Called');
        }
        Module.SomeFunc = SomeFunc;

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
        Module.SomeClass = SomeClass;

        /**
        *
        */
        function PrivateFunc() {
            alert('PrivateFunc called');
        }
    })(Some.Module || (Some.Module = {}));
    var Module = Some.Module;
})(Some || (Some = {}));

// Доступ к переменной из пространства имен.
Some.Module.SomeVar = 'Hello moto!';

// Вызов функции из пространства имен.
Some.Module.SomeFunc();

// Ошибка компиляции.
//Some.Module.PrivateFunc();
// Инстанцирование класса из пространства имен.
var instance = new Some.Module.SomeClass();
instance.alert();

// Импортирование части модуля.
var SomeClass1 = Some.Module.SomeClass;
new SomeClass1();

var SomeClass2 = Some.Module.SomeClass;
new SomeClass2;
//# sourceMappingURL=script.js.map
