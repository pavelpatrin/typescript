/**
* Created by pavelpat on 03.06.14.
*/

function test(a, b, c) {
    if (typeof a === 'number') {
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
test(1, 2);
// Ошибка компиляции.
//test('1', 2);
//# sourceMappingURL=script.js.map
