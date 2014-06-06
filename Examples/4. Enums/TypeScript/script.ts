/**
 * Created by pavelpat on 03.06.14.
 */

/**
 * Перечисление цветов.
 */
enum Colors
{
    Red,
    Green,
    White,
    Black
}

/**
 * Перечисление со значениями.
 */
enum Digits
{
    One = 1,
    Two = 2,
    Three = 3
}

/**
 * Вычисляемое перечисление.
 */
enum Style {
    None = 0,
    Bold = 1,
    Italic = 2,
    Underline = 4,
    Emphasis = Bold | Italic,
    Hyperlink = Bold | Underline
}


function fillBackground(color:Colors)
{
    alert(color);
}

fillBackground(Colors.Red);