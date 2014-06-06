/**
 * Created by pavelpat on 03.06.14.
 */

/**
 * Обобщенные функции.
 */
function genericFunction<T>(a:T):T
{
    return a;
}

// Ок.
genericFunction(1);

// Ок.
genericFunction<number>(1);

// Ошибка.
//genericFunction<number>('test');