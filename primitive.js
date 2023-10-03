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
