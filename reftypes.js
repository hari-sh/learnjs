//object
let person = {name: 'Hari', age:'26'}
console.log(person) //logs person obj

//dot notation -> use when property is known prior
console.log(person.name) //Hari

//bracket notation -> use when property is obtained at runtime
console.log(person['name']) //Hari
let prop='name'
console.log(person[prop]) //Hari
