let role='author'
if(role === 'author') console.log('read/write');
else if(role === 'reviewer') console.log('read only');
else  console.log('no permission');

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

for (let i = 0; i < 5; i++){
    console.log(i);
}

let j = 0;
while(j<5) {
    console.log(j);
    j++;
}

let k=0;
do {
    console.log(k);
    k++;
} while(k<5);

const circle = {
    radius:5,
    centre:{x:0, y:0}
};

for(let key in circle){
    console.log(key, circle[key]); //use comma in console.log() -> nice
}

let numbers = [1,2,3,4,5];

for (let ind in numbers){
    console.log(ind, numbers[ind]);
}

//for-of from es6

for(let num of numbers){
    console.log(num);
}

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