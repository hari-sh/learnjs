function sayhi(name){
    console.log('hi' + hari);
} // no need of semicolon here. similar to c

sayhi('hari');
//'hari' in caller  -> argument
//name in declaration -> parameter
// console.log('hello')

/*
function types
1. performs a task -> void return type equivalent
2. returns a value
*/

//function Declaration

//walk() -> allowed. js will move all function declarations above 

function walk(){
}

//f1() -> calling not allowed here f1 is not yet defined
//this is function expression not function declaration
/*--------------------------------*/
/*Hoisting
- process of moving all function declarations to top of file.
- this will be done by js engine
*/
/*---------------------------------*/

//anonymous function Expression
let f1 = function() {}; //terminate with semi-colon similar to variable assignment
//similar to assigning values to variable.
//functions are objects in js

//Named function Expression
let f2 = function walk() {};

f1(); //anonymous function can be called like this
let f3 = f1;
//f3 and f1 point to same anonymous function

//arguments

function sum(a, b){
    return a + b;
}

console.log(sum(1,2)); //3
console.log(sum(1)); //NaN (1+ undefined)
console.log(sum(1,2,3,4,5)) //3 (only first two arguments are used)

function multisum(){
    let total = 0;
    //arguments => will have all arguments passed
    for (let value of arguments)
    {
        total +=value;
    } 
    //listen: for of loop can be used
    //arguments are declared as iterators. 
    //it is object though but also has iterator
    return total;
}

console.log(multisum(1,2,3,4,5)) //15

//rest operator(...args)

function argssum(discount, ...args)   {
    //args is an array
    return args.reduce((a,b)=> a+b)*(1-discount); //checkout reduce in array methods
}

//function fname(discount, ..args, tax) -> error: rest param should be the last
console.log(argssum(0.1,1,2,3,4,10)) //18 

function interest(principal, rate=3.5, years=5){
//default params are used
    return principal * (rate/100) * years;
}

console.log(interest(10000)) //1750 

//make sure that default params are last in the list
/*
function interest(p, r=3.5, n){}
interest(10000, undefined, 5) //works but ugly code
*/


//getters and setters

const person = {
    firstName:'Hari',
    lastName:'Kalyan',
    get fullName()  {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person) //check this print-> some issues
person.fullName = 'John Smith'
//person.fullName = null -> error in split-> solution below
console.log(person)

const person1 = {
    firstName:'Hari',
    lastName:'Kalyan',
    get fullName()  {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if(typeof(value) !== 'string')
            throw new Error('Value is not a string');
        const parts = value.split(' ');
        if (parts.length !==2)
            throw new Error('Invalid Name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person1.fullName = '';
}
catch (e){
    console.log(e);
}
//let, const are block scoped.
//var is function scoped

const color = 'red';

function blockcolor(){
    const color = 'blue';  //local variable has precedence over global
    console.log(color);
    /*check how to access global when local has same name*/
}

blockcolor();

//this keyword -> points the closest object it is inside


/*important understanding*/
const video0 = {
    title:'video0',
    tags: [1,2,3],
    showtags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag); //here this refers to window obj
            //this anonymous function is not a method of video.
            //it is a global function 
        })
    }
}

video0.showtags()
//to print this.title use thisarg in foreach
const video1= {
    title:'video1',
    tags: [1,2,3],
    showtags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);//works as expected
        }, this)
    }
}
video1.showtags()

const video2= {
    title:'video2',
    tags: [1,2,3],
    showtags(){
        const self = this; //not preferred but works
        this.tags.forEach(function(tag){
            console.log(self.title,tag);
        })
    }
}
video1.showtags()


function playVideo()    {
    console.log(this);
}

playVideo.call({name: 'Hari'},1,2) //this refers to passed obj
playVideo() //this refers to window object
playVideo.apply({name:'Hari'}, [1,2]) //same as call. but params should be array

playVideo.bind({name: 'Hari'});
playVideo(); //permanently sets to given object -> check later// not works

const video3= {
    title:'video2',
    tags: [1,2,3],
    showtags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag); //works as expected
        }.bind(this)); //better solution
    }
}
video1.showtags()

//from es6 use arrow function

const video4= {
    title:'video2',
    tags: [1,2,3],
    showtags(){
        this.tags.forEach(tag =>{
            console.log(this.title,tag); //works as expected
        }); //latest solution
    }
}
video1.showtags()