/**
 * Created by pavelpat on 03.06.14.
 */

function test(a:number, b:number, c:boolean):boolean;
function test(a:string, b:string):boolean;
function test(a:boolean, b:boolean):boolean;
function test(a:any, b:any, c?: boolean):boolean
{
    if (typeof a === 'number')
    {
        return c;
    }

    return true;
}

// Ок.
test('1', '2');

// Ок.
test(true, true);

// Ок.
test(1, 2, true);

// Ошибка компиляции.
//test(1, 2);

// Ошибка компиляции.
//test('1', 2);