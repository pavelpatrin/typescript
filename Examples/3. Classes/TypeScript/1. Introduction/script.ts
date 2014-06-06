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

    public someMethod()
    {
        alert('someMethod() called');

//        (() => {
//            alert(this);
//        })();
//
//        (function() {
//            alert(this);
//        })();
//
//        document.querySelector('body').addEventListener('click', () => {
//            this.property = '12345';
//        });
    }

    public static someStaticMethod()
    {
        alert('someStaticMethod() called');
    }

    private static somePrivateStaticMethod()
    {
        alert('somePrivateStaticMethod() called');
    }

    /**
     * Аксессор свойства.
     */
    private get property():string {
        return this._property;
    }

    /**
     * Мутатор свойства.
     */
    private set property(value:string) {
        this._property = value;
    }
}

// Ок.
//SomeClass.someStaticMethod();

// Ошибка компиляции.
//SomeClass.somePrivateStaticMethod();

(new SomeClass()).someMethod();