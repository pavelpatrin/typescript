/**
 * Created by pavelpat on 03.06.14.
 */

class SomeClass
{
    constructor(...args)
    {
        alert('SomeClass constructor called!');
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
    constructor()
    {
        super();
        alert('ChildSomeClass constructor called!');
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
