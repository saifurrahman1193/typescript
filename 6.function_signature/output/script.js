"use strict";
let calculation;
calculation = (x, y, c) => {
    if (c == 'plus') {
        return x + y;
    }
    else if (c == 'minus') {
        return x - y;
    }
    return 'Error: Invalid action';
};
console.log(calculation(10, 5, 'plus'));
console.log(calculation(10, 5, 'minus'));
console.log(calculation(10, 5, ''));
