/**
 * Created by pavelpat on 03.06.14.
 */

interface Comparable
{
    localeCompare(other:Comparable): number;
    value: number;
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
    constructor(public value:number)
    {
    }

    public localeCompare(other:Comparable):number
    {
        return this.value - other.value;
    }
}

console.log(
    compare(
        new NumberComparableValue(1),
        new NumberComparableValue(2)
    )
);

console.log(
    compare(
        {
            localeCompare: function (other:Comparable):number
            {
                return this.value - other.value;
            },
            value: 1
        },
        {
            localeCompare: function (other:Comparable):number
            {
                return this.value - other.value;
            },
            value: 2
        }
    )
);

