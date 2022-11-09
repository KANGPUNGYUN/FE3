// ------------------------------------------- //

// import a from './015.js';

// a(); // d 출력, default가 우선시 되기 때문

// ------------------------------------------- //

// import d, {a, b, c} from './015.js';

// a(); // a
// b(); // b
// c(); // c
// d(); // d

// ------------------------------------------- //

// import {a, b, c}, d from './015.js'; // error

// a(); // a
// b(); // b
// c(); // c
// d(); 

// ------------------------------------------- //

// import {a, b, c, d} from './015.js'; //SyntaxError: The requested module './015.js' does not provide an export named 'd'

// a();
// b(); 
// c();
// d();

// ------------------------------------------- //

import * as all from './015.js';

console.log(all); 
//[Module: null prototype] {
//     a: [Function: a],
//     b: [Function: b],
//     c: [Function: c],
//     default: [Function: d]
//   }
console.log(all.a()); // a, undefined
console.log(all.b()); // b, undefined
console.log(all.c()); // c, undefined
console.log(all.default()); // d, undefined
// console.log(all.d()); // TypeError: all.d is not a function