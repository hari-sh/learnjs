
//primitive or value types
/*
1. string
2. Number
3. Boolean
4. Undefined
5. null
*/

let animal='dog'
let age=8
let isdangerous=false
let favfood; //let favfood=undefined same
let color=null;

console.log(typeof(animal)); //string
console.log(typeof(age));  //number
console.log(typeof(isdangerous));  //boolean
console.log(typeof(favfood));  //undefined
console.log(typeof(color)); //object


//dynamic typing
let dynvar='hi'
console.log(typeof(dynvar))
dynvar=1;
console.log(typeof(dynvar))

let undefvar = undefined
console.log(undefvar) //undefined
console.log(typeof(undefvar)) //undefined


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



let role='author'
if(role === 'author') console.log('read/write');
else if(role === 'reviewer') console.log('read only');
else  console.log('no permission');

switch(role){
    case 'author':
        console.log('read/write');
        break;
    case 'reviewer':
        console.log('read only');
        break;
    default:
        console.log('no permission');
}

//better to use if/else instead of switch/case

for (let i = 0; i < 5; i++){
    console.log(i);
}

let j = 0;
while(j<5) {
    console.log(j);
    j++;
}

let k=0;
do {
    console.log(k);
    k++;
} while(k<5);

const circle = {
    radius:5,
    centre:{x:0, y:0}
};

for(let key in circle){
    console.log(key, circle[key]); //use comma in console.log() -> nice
}

let numbers = [1,2,3,4,5];

for (let ind in numbers){
    console.log(ind, numbers[ind]);
}

//for-of from es6

for(let num of numbers){
    console.log(num);
}

let icont = 0;
while(icont <= 10) {
    if(icont===6) break;
    if(icont %2 === 0)  {
        icont++;
        continue; //use of continue not recommended
    }
    console.log(icont);
    icont++;
}