/**
 * Created by pavelpat on 03.06.14.
 */

class SomeSingleton
{
    private static instance:SomeSingleton;

    public static getInstance()
    {
        if (!SomeSingleton.instance)
        {
            SomeSingleton.instance = new SomeSingleton();
        }

        return SomeSingleton.instance;
    }

    public sayHello()
    {
        alert('Hello');
    }
}


var instance = SomeSingleton.getInstance();
instance.sayHello();
