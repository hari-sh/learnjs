function variables()
{
console.log('variable rules');
    let name;
    console.log(name); //undefined
    //const name; -> Error: const should be initialized while declaring

    let name2 = 'hari';
    console.log(name2); //hari

    let fname='Hari', lname='kalyan'; //declare multiple variables
    console.log(fname + ' ' + lname)  //Hari Kalyan

    let fname1, lname1='kalyan' //can be left undefined
    console.log(fname1 + ' ' + lname1) //undefined kalyan

    //rules
    //cannot be a reserved keyword
    //cannot start with a number
    //cannot contain space or hypen
    //are case sensitive
    
    //Best practices
    //should be meaningful
    //declare each variable on a separate line
    //use camel case

console.log('let vs const');
    let lpi=3.14;
    lpi = 3;
    console.log(lpi); //3
    //this is not correct. pi should not be changed

    const cpi=3.14;
    //cpi=3; -> Uncaught TypeError TypeError: Assignment to constant variable.
    console.log(cpi);
}

/* 
primitive or value types
    1. string
    2. Number
    3. Boolean
    4. Undefined
    5. null
*/
function primitives()
{
    let animal='dog'
    let age=8
    let isdangerous=false
    let favfood; 
    //let favfood=undefined same
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
}

function operators()
{
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
}

function controlflow()
{
console.log('if - else if - else');
    let role='author'
    if(role === 'author') console.log('read/write');
    else if(role === 'reviewer') console.log('read only');
    else  console.log('no permission');

console.log('switch - case');
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

console.log('for');
    for (let i = 0; i < 5; i++){
        console.log(i);
    }

console.log('while');
    let j = 0;
    while(j<5) {
        console.log(j);
        j++;
    }

console.log('do while');
    let k=0;
    do {
        console.log(k);
        k++;
    } while(k<5);

    const circle = {
        radius:5,
        centre:{x:0, y:0}
    };

console.log('for in')
    for(let key in circle){
        console.log(key, circle[key]); //use comma in console.log() -> nice
    }

    let numbers = [1,2,3,4,5];

console.log('for in array')
    for (let ind in numbers){
        console.log(ind, numbers[ind]);
    }

    //for-of from es6
console.log('for of');
    for(let num of numbers){
        console.log(num);
    }

console.log('break - continue')
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
}

variables();
// operators();
// controlflow()