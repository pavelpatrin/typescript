/**
 * Created by pavelpat on 03.06.14.
 */

module Some.Module
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

import SomeClass2 = Some.Module.SomeClass;
new SomeClass2;