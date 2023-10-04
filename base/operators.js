//Arithmetic

let xarith=10;
let yarith=3;

console.log(xarith + yarith);
console.log(xarith - yarith);
console.log(xarith * yarith);
console.log(xarith / yarith);
console.log(xarith % yarith);
console.log(xarith ** yarith);

console.log(xarith++); //check where this will take effect
console.log(++xarith);
console.log(xarith--);
console.log(--xarith);

//assignment

let xassign = 10;
xassign += 5;

//comparison

let xcompar = 1;
//relational
console.log(xcompar > 0);
console.log(xcompar >= 1);
console.log(xcompar < 0);
console.log(xcompar <= 0);

//equality
console.log(xcompar === 0);
console.log(xcompar !== 0);


//strict equality (type + value)
console.log(1 === 1 );   //true
console.log('1' === 1 ); //false

//lose equality
console.log(1 == 1 );    //true
console.log('1' == 1 );  //false

//in lose equality, type conversion takes place and then check for equality
//better to use strict equality 

let isZero = (xcompar === 0) ? true:false;
console.log(isZero);


//logical
/*
&& -> logical and
|| -> logical or
!  -> not
*/

//logical with non boolean
/*
Falsy values -> values taken as false while doing logical operations
- undefined
- null
- 0
- false
- ''
- NaN
*/

console.log('typecasting to boolean')
console.log(Boolean(undefined))  //false
console.log(Boolean(null))  //false
console.log(Boolean(0))  //false
console.log(Boolean(false))  //false
console.log(Boolean(''))  //false
console.log(Boolean(NaN))  //false

//Bitwise
/*
| -> Bitwise OR
& -> Bitwise AND
/*refer bitwise NOT*/
/*get operator precedence in js*/
