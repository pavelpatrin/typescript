/**
 * Created by pavelpat on 03.06.14.
 */

class SomeClass
{
    private _property:string;

    /**
     * Аксессор свойства.
     */
    public get property():string {
        return this._property;
    }

    /**
     * Мутатор свойства.
     */
    public set property(value:string) {
        this._property = value;
    }
}

var instance = new SomeClass();
instance.property = "Hello world";

alert(instance.property);
