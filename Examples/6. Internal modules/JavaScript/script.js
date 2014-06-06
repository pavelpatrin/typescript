/**
 * Created by pavelpat on 01.06.14.
 */

/**
 * @module WebApp
 */
var SomeModule = (function(){
    var WebApp = {};

    /**
     * Публичная переменная в модуле.
     */
    WebApp.SomeVar = 'Hello world!';

    /**
     * Публичная функция в модуле.
     */
    WebApp.SomeFunc = function() {
        alert('Called');
    };

    /**
     * Конструктор, генерирующий alert во время инстанцирования.
     *
     * @constructor
     */
    WebApp.SomeConstructor = function() {
        alert('Instantiated');
    };
    WebApp.SomeConstructor.prototype.alert = function() {
        alert('Alert called');
    };

    return WebApp;
})();


// Доступ к переменной из пространства имен.
WebApp.SomeVar = 'Hello moto!';

// Вызов функции из пространства имен.
WebApp.SomeFunc();

// Инстанцирование класса из пространства имен.
var instance = new WebApp.SomeConstructor();
instance.alert();

// Импортирование части модуля.
var SomeClass = WebApp.SomeConstructor;
new SomeClass();