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

console.log()