/**
 * Created by pavelpat on 03.06.14.
 */

class SomeClass
{
    public someMethod()
    {
        alert('someMethod() called');
    }

    private somePrivateMethod()
    {
        alert('somePrivateMethod() called');
    }
}

var instance = new SomeClass();

// Ок.
instance.someMethod();

// Ошибка компиляции.
//instance.somePrivateMethod();
