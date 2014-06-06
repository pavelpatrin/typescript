/**
 * Created by pavelpat on 03.06.14.
 */

class SomeClass
{
    private _property:string = 'Test';

    constructor()
    {
        alert('Class constructor called!');
    }

    /**
     * Публичный метод.
     */
    public someMethod()
    {
        alert('someMethod() called');
    }

    /**
     * Статичный метод.
     */
    public static someStaticMethod()
    {
        alert('someStaticMethod() called');
    }

    /**
     * Аксессор свойства.
     */
    private get property():string {
        return this._property;
    }
}

// Ок.
SomeClass.someStaticMethod();

// Ок.
var instance = new SomeClass();
instance.someMethod();
