/**
 * Created by pavelpat on 03.06.14.
 */

/**
 * Декларирование функции как в JS.
 */
function a()
{
    return 123;
}

a();


/**
 * Декларирование функции с описанием типов.
 */
function b(a:number):number
{
    return 123;
}

b(123);


/**
 * Определение функции в стиле TypeScript.
 */
var c = (a:number):number => {
    return 123;
};

c(123);


/**
 * Lambda-определение функции.
 */
var d = (a:number):number => 123;

d(123);


/**
 * Отличия при работе с this
 */
document.body.addEventListener('click', function(e) { console.log(this); });
document.body.addEventListener('click', (e) => { console.log(this); });


function  test(a:number)
{

}

