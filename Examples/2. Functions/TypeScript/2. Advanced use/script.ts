/**
 * Created by pavelpat on 03.06.14.
 */

/**
 * Параметры со значениями по-умолчанию.
 */
function defaults(x:number, y = x * 2, z = x + y)
{
    return z;
}

defaults(1);
defaults(1, 2);
defaults(1, 2, 3);


/**
 * Опциональные параметры.
 */
function optionals(x?:number)
{
    if (x === undefined)
    {
        return 0;
    }

    return x;
}

optionals();
optionals(1);


/**
 * Переменное колличество аргументов.
 */
function args(a, b, c, ...args)
{
    console.log(a);
    console.log(b);
    console.log(c);

    for (var i = 0; i < args.length; i++)
    {
        console.log(args[i]);
    }
}

args(1, 2, 3, 4, 5, 6, 7, 8, 9, 9);



