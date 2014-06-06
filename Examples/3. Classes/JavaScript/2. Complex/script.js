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
 * Публично доступный метод.
 *
 * @public
 */
SomeClass.prototype.someMethod = function ()
{
    alert('someMethod() called');
};

/**
 * Класс.
 *
 * @constructor
 */
function SomeClassChild()
{
}

// Наследование класса
extend(SomeClass, SomeClassChild);

/**
 * Публично доступный метод.
 *
 * @public
 */
SomeClassChild.prototype.someMethod = function ()
{
    alert('overridden someMethod() called');
};

/**
 * Приватно доступный метод.
 *
 * @private
 */
SomeClassChild.prototype.somePrivateMethod = function ()
{
    alert('somePrivateMethod() called');
};


function extend(parent, descendant)
{
    var proxy = function(){this.constructo = descendant;};

    proxy.prototype = parent.prototype;

    for (var property in parent)
    {
        if (parent.hasOwnProperty(property))
        {
            proxy[property] = parent[property]
        }
    }

    descendant.prototype = new proxy();
}



var s = new SomeClass();
s.someMethod();


var c = new SomeClassChild();
c.someMethod();
c.somePrivateMethod();