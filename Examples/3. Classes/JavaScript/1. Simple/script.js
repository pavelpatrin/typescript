/**
 * Created by pavelpat on 04.06.14.
 */

/**
 * Класс.
 *
 * @constructor
 */
function SomeClass()
{
}

/**
 * Публично доступный аттрибут.
 *
 * @type {string}
 */
SomeClass.prototype.someAttribute = '12345';

/**
 * Публично доступный метод.
 *
 * @public
 */
SomeClass.prototype.someMethod = function ()
{
    alert('someMethod() called');
};



var s = new SomeClass();
s.someMethod();
