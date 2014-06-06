/**
 * Created by pavelpat on 03.06.14.
 */

module WebApp
{
    /**
     * Публичная переменная модуля.
     */
    export var SomeVar = 'Hello world!';

    /**
     * Публичная функция модуля
     */
    export function SomeFunc()
    {
        alert('Called');
    }

    /**
     * Публичный класс модуля.
     */
    export class SomeClass
    {
        constructor()
        {
            alert('Instantiated');
        }

        public alert()
        {
            alert('Alert called');
        }
    }

    /**
     *
     */
    function PrivateFunc()
    {
        alert('PrivateFunc called');
    }
}

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

import SomeClass2 = WebApp.SomeClass;
new SomeClass2;