//inheritance
//prototypical inheritance
let x = {};
//x -> Object
console.log(x.toString())
//tostring is from Object base
//tostring is searched in x and then searched in parent of x
console.log(Object.getPrototypeOf(x))
//every object has a prototype or parent except root object

let y = []
//y->Array->Object

//our constructor method(Circle) will be the prototype of c2 object(Circle Object)

let person = {name:'Hari'};
console.log(Object.keys(person)); //name only found.// no prototypes
console.log(Object.getPrototypeOf(person)); //shows object base constructors
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(person), 'toString'));
_ = {
    "writable": true,
    "enumerable": false,
    "configurable": true
}//display this
//enumerable is false, so not coming in keys

Object.defineProperty(person, 'name', {writable:false});
person.name = 'rana';
console.log(person.name) //still hari

console.log({}.__proto__);
console.log(Object.prototype); //both are same

console.log([].__proto__);
console.log(Array.prototype); //both are same


function Circ(radius){
    this.radius = radius;
    //instance members (own members)
    this.draw = function()  {
        console.log('draw');
    }
}

console.log(new Circ(1));
console.log(new Circ(2));//draw takes two memory

function Circ1(radius){
    this.radius = radius;
    this.move = function(){
        //we can use this.draw() here
        console.log('move');
    }
}

const circ1 = new Circ1(5);
//circ1.draw() wont be available
//prototype members
Circ1.prototype.draw = function()  {
    //we can use this.move() here
    console.log('draw');
}
circ1.draw(); //it will be available here

console.log(new Circ1(1));

Circ1.prototype.toString = function()  {
    console.log('Circle with radius ' + this.radius);
}
//nearby accessible function will be called if two names are string

console.log(Object.keys(circ1)); //returns instant members only
for(let key in circ1) console.log(key); //returns both instant and prototype members

console.log(circ1.hasOwnProperty('move'))//true
console.log(circ1.hasOwnProperty('draw'))//false

//built in objects modification can be made. but dont do




