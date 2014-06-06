/**
 * Created by pavelpat on 03.06.14.
 */

class SomeClass
{
    constructor()
    {
        alert('Class constructor called!');
    }

    public someMethod()
    {
        alert('someMethod() called');
    }

    public static someStaticMethod()
    {
        alert('someStaticMethod() called');
    }
}

class ChildSomeClass extends SomeClass
{
    public constructor()
    {
        super();
    }

    public someMethod()
    {
        alert('overridden someMethod() called');
    }
}

// Ок.
ChildSomeClass.someStaticMethod();

var c = new ChildSomeClass();

// Ок.
c.someMethod();
