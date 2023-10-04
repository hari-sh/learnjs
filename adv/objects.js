const c1 = {
    radius:1,
    draw: function(){
        console.log('draw circle with radius:' + this.radius)
    }
};

const c2 = {
    radius:2,
    draw: function(){
        console.log('draw circle with radius:' + this.radius)
    }
};

c1.draw(); //draw circle with radius:1
c2.draw(); //draw circle with radius:2

//use a factory function

function createCircle(radius){
    return{
        radius : radius,
        draw: function()    {
            console.log('draw circle with radius:' + this.radius)
        }
    }
}

//or simply
//in modern js if param and property are same we can use single name
//if funs are inside object simply declare without function keyword
//came notation
function createCircle1(radius){
    return{
        radius,
        draw(){
            console.log('draw circle with radius:' + this.radius)
        }
    }
}

const c3 = createCircle(3)
c3.draw(); //draw circle with radius:3

//use a constructor function
//PascalNotation
//no return statement
function Circle(radius){   //capital letter in beginning -> convention
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const c4 = new Circle(4); 
//if you forget new, this inside constructor will refer to global object
//new will create a new object and this will refer to that newly created obj


//every object has a constructor
//the function that is used to create a constructor.

console.log(c4.constructor) //[Function: Circle]
console.log(c3.constructor) //[Function: Object]
//c3 used default Object function to create a constructor.

new Object()
//we use {} -> simple and convenient

//similarly
new String()
// we use '', "", ``
new Number()
// we use 1,2
new Boolean()
// we use true, false


/*functions are objects*/

console.log(Circle.name)
console.log(Circle.length) //number of arguments
console.log(Circle.constructor)

const Circle1 = new Function('radius', `this.radius = radius;
this.draw = function(){
    console.log('draw')
}`); //same as Circle


const c5 = new Circle1(5)
const c6 = Circle1.call({}, 6); //same as above line. instead of new we pass, {}
const c7 = Circle1.apply({}, [1,2,3]) //pass args as array
console.log(c4)
console.log(c5)


/* value types and ref types */
/*value types*/
/*
- Number
- String
- Boolean
- Symbol
- undefined
- null
*/

/*ref types*/
/*
Objects
Function
Array
functions and arrays are also objects

 js is primitive and object in a nutshell*/

 let x = 10;
 let y = x;

 x = 20;

//x and y are independent

let x1 = {value: 10}
let y1 = x1;

x1.value = 20 //changes y1 also

/*
objects are somewhere in memory and address is stored in x1 and y1
primitives are directly stored in x and y
*/


let num1 = 10;
function increase(number)   {
    number++;
}

increase(num1);
console.log(num1); //10 no change

let obj1 = {value:10};
function increase(obj)   {
    obj.value++;
}

increase(obj1);
console.log(obj1.value); //11 changed

//objects are called by reference.
//primitives are called by value.


/*add or remove properties*/

c1.location = {x:1};
const propName = 'center'
c1[propName] = {x:0}

delete c1.location
delete c1[propName]

/*enumerate properties*/

for(let key in c1){
    //if typeof(circle[key]) !== 'function'
    console.log(key +':'+ c1[key])
}

const keyc1 = Object.keys(c1); //we can't separate props/function here
console.log(keyc1)

if('radius' in c1){
    console.log('circle has radius')
}


//private methods and properties

function Circle2(radius)    {
    this.radius = radius;
    let defaultLocation = {x: 0, y:0} //these variables will continue stay in memory -> closure
    let computeOptimumLocation = function(factor) { //this also will stay in memory -> closure
        return {x:2, y:1*factor}
    }
    this.draw = function()  {
        let x, y; //x and y will die after executing this function-> this is scope
        computeOptimumLocation(0,1);
        console.log('draw')
    }
}

c8 = new Circle2(8);
c8.draw();
//learn about closures in js

function Circle3(radius)    {
    this.radius = radius;
    let defaultLocation = {x: 0, y:0} //these variables will continue stay in memory -> closure
    let computeOptimumLocation = function(factor) { //this also will stay in memory -> closure
        return {x:2, y:1*factor}
    }
    this.draw = function()  {
        let x, y; //x and y will die after executing this function-> this is scope
        computeOptimumLocation(0.1);
        console.log('draw')
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y){
                throw new Error('Invalid location')
            }
            defaultLocation = value;
        }
    })
}

const c9 = new Circle3(9)
c9.defaultLocation = {x:1, y:1}
//{x:0, x:1} throws errors 0 seems to be false in js /*verify*/
console.log(c9.defaultLocation);

const c10 = {};
for(let key in c1){
    c10[key] = c1[key];
}
console.log('Copy Obj old');
console.log(c1);
console.log(c10);

console.log(Object.assign({}, c1)) //same as c1
console.log({...c1}) //same as above elegent way
//keeping ...c1 will do copy. if we keep c1. c1 itself will become a property
// ... -> spread operator

console.log(Object.assign({color:'red'}, c1, c2)) 
console.log({color:'red', ...c1, ...c2}); //elegent way of copy same as above
//c2 and c1 has radius. it is overwritten by c2


//garbage collection
//as a dev, dont have much control. it will happen by itself
/*check more on this*/

//checkout js Math Object
//checkout js String Object

//js has string primitive and string object

console.log(typeof('hi')); //string
console.log(typeof(new String('hi'))); //object

const strprim = 'hi'
strprim.toUpperCase() 
//when we do dot on string primitive js wraps it around string object

//template literal -> ``
/*
to use string exactly the way it looks
to add place holder using ${variable/expression}
*/

console.count(`${strprim} -> ${2+5}`);



