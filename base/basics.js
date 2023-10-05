function varname()
{
    let name;
    console.log(name); //undefined

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
}

// varname()

function letpi()
{
    let pi=3.14;
    pi = 3;
    console.log(pi); //3
    //this is not correct. pi should not be changed
}

function constpi()
{
    const pi=3.14
    pi=3; //Uncaught TypeError TypeError: Assignment to constant variable.
    console.log(pi)
}
constpi()
