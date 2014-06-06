/**
* Created by pavelpat on 03.06.14.
*/
var _this = this;

function compare(x, y) {
    if (x == null) {
        return y == null ? 0 : -1;
    }
    if (y == null) {
        return 1;
    }

    return x.localeCompare(y);
}

var NumberComparableValue = (function () {
    function NumberComparableValue(value) {
        this.value = value;
    }
    NumberComparableValue.prototype.localeCompare = function (other) {
        return this.value - other;
    };
    return NumberComparableValue;
})();

compare(new NumberComparableValue(1), new NumberComparableValue(2));

compare({
    localeCompare: function (other) {
        return _this.value - other;
    },
    value: 1
}, {
    localeCompare: function (other) {
        return _this.value - other;
    },
    value: 2
});
//# sourceMappingURL=script.js.map
