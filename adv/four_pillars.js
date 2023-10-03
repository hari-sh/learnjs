let baseSalary = 3000;
let overtime = 10;
let rate = 20;

function getwage(baseSalary, overtime, rate){
    return baseSalary + (overtime*rate);
}

let employee = {
    baseSalary: 3000,
    overtime:10,
    rate: 20,
    getwage: function(){
        return this.baseSalary + (this.overtime * this.rate);
    }
}

employee.getwage();


/*
encapsulation
- reduces complexity
- increases reusability
abstraction
- reduces complexity
- isolate impact of changes
inheritance
- eliminate redundant code
polymorphism
- refactor ugly switch/case statements
*/