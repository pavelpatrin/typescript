/**
 * Created by pavelpat on 03.06.14.
 */

interface Comparable
{
    localeCompare(other:any): number;
}

function compare<T extends Comparable>(x:T, y:T):number
{
    if (x == null)
    {
        return y == null ? 0 : -1;
    }
    if (y == null)
    {
        return 1;
    }

    return x.localeCompare(y);
}



class NumberComparableValue implements Comparable
{
    constructor(public value:number){}

    public localeCompare(other:any):number
    {
        return this.value - other;
    }
}

compare(new NumberComparableValue(1), new NumberComparableValue(2));


compare(
    {
        localeCompare: (other:any):number => this.value - other,
        value: 1
    },
    {
        localeCompare: (other:any):number => this.value - other,
        value: 2
    }
);

