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
        radius,
        draw: function()    {
            console.log('draw circle with radius:' + this.radius)
        }
    }
}

const c3 = createCircle(3)
c3.draw(); //draw circle with radius:3

//use a constructor function
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
console.log(Circle.length)
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