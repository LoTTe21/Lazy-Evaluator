//parse_and_run('function a(){const b = 2; return b;} a();');

/*
parse_and_run('function factorial(n) {\n' +
     '    return n === 1\n' +
     '        ? 1\n' +
     '        : factorial(n - 1) * n;\n' +
     '}' +
     'factorial(4);');
*/

// parse_and_run('function x() {\n' +
//     '    const a = 1;\n' +
//     '    return a;\n' +
//     '    a = 2;\n' +
//     '}\n' +
//     'x();');

/*
parse_and_run(" \
function multiple_dwelling() { \
const baker = amb(1, 2, 3, 4, 5); \
const cooper = amb(1, 2, 3, 4, 5); \
const fletcher = amb(1, 2, 3, 4, 5); \
const miller = amb(1, 2, 3, 4, 5); \
const smith = amb(1, 2, 3, 4, 5); \
require(distinct(list(baker, cooper, fletcher, miller, smith))); \
require(! (baker === 5)); \
require(! (cooper === 1)); \
require(! (fletcher === 5)); \
require(! (fletcher === 1)); \
require(! (miller > cooper)); \
require(! ((math_abs(smith - fletcher)) === 1)); \
require(! ((math_abs(fletcher - cooper)) === 1)); \
return list(list('baker', baker), \
list('cooper', cooper), \
list('fletcher', fletcher), \
list('miller', miller), \
list('smith', smith)); \
} \
multiple_dwelling(); \
");
*/