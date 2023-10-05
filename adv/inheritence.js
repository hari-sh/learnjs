function Shape()    {

}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circ2(radius){
    this.radius = radius;
}

Circ2.prototype.radius = function(){
    console.log('draw');
}

console.log(new Shape()); //separate shape obj
console.log(new Circ2()); //separate circle obj



function Circ3(radius){
    this.radius = radius;
}

Circ3.prototype = Object.create(Shape.prototype) //inheritance
console.log(new Circ3(2));

console.log(new Circ2.prototype.constructor(1))
console.log(new Circ2(1)) //both are same

console.log(new Circ3.prototype.constructor(1))
console.log(new Circ3(1)) //both are not same
//constructor is assigned to shape constructor

Circ3.prototype.constructor = Circ3; //check again some issue here
console.log(new Circ3.prototype.constructor(1))
console.log(new Circ3(1))


//calling super class

function Shape(color){
    this.color = color;
}

function Circ4(radius, color)   {
    Shape(color) //add color to window object
    new Shape(color) //create a new object here and add color to it.(check)
    Shape.call(this, color); //works as per our wish
    this.radius = radius;
}

console.log(new Circ4(1, 'red'));

//reusable function for doing inheritance
//intermediate function inheritance
function extend(Child, Parent)  {
    Child.prototype = Object.call(Parent.prototype);
    Child.prototype.constructor = Child;
}

//after extending Base class, if we want to override, do it after extend function call

Circ3.prototype.duplicate = function(){
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle')
}
console.log(new Circ3().duplicate()) //prints duplicate then duplicate circle
//base is printed and then derived is printed

function ShapePoly()  {
}

function CirclePoly() {
}

function SquarePoly()   {
}

extend(CirclePoly, ShapePoly)
extend(SquarePoly, ShapePoly)
CirclePoly.prototype.duplicate = function() {
    console.log('duplicate circle');
}

SquarePoly.prototype.duplicate = function() {
    console.log('duplicate square');
}

console.log((new CirclePoly()).duplicate());
console.log((new SquarePoly()).duplicate());
//different methods will be called based on objects -> Polymorphism
