(() => {
    let arr=[1,2,3,4,5]; 
    console.log(arr.push(6));     //6 -> prints length
    console.log(arr);             //[1, 2, 3, 4, 5, 6]
    console.log(arr.push(8, 9, 10))  //9
    console.log(arr);                //[1, 2, 3, 4, 5, 6, 8, 9, 10]
})();

(() => {
    let arr=[1,2,3,4,5]; 
    console.log(arr.unshift(6));        //6 -> prints length
    console.log(arr);                   //[6, 1, 2, 3, 4, 5]
    console.log(arr.unshift(8, 9, 10))  //9
    console.log(arr);                   //[8, 9, 10, 6, 1, 2, 3, 4, 5]
})();

(() => {
    let arr=[1,2,3,4,5]; 
    console.log(arr.pop());         //5 -> pop'ed value
    console.log(arr);               //[1, 2, 3, 4]
})();

(() => {
    let arr=[1,2,3,4,5]; 
    console.log(arr.shift());         //1 -> pop'ed value
    console.log(arr);                 //[2, 3, 4, 5]
})();

(() => {
    let arr = [1,2,3,4,5]; 
    console.log(arr.splice(2, 2, 7, 8)); //[3, 4]
    console.log(arr);                    //[1, 2, 7, 8, 5]
})();

(() => {
//reverse()
console.log(['one', 'two', 'three'].reverse());
})();

(() => {
//reduce(callbackFn, initialValue)
    console.log([1, 2, 3, 4].reduce((acc, curr) => acc + curr, 5));      //15

//reduce(callbackFn, initialValue)
    console.log([1, 2, 3, 4].reduceRight((acc, curr) => acc + curr, 5)); //15

//filter(callbackFn, thisArg)
    console.log([1, 2, 3, 4, 5].filter((item) => item > 3)); //[4, 5] //does a shallow copy
    //filter accept true or false only as arg

//every(callbackFn, thisArg)
    console.log([1,2,3,4,5].every((elem)=> typeof(elem) === 'number'))//true
    console.log([1,2,3,4,undefined].every((elem)=> typeof(elem) === 'number'))//false

//some(callbackFn, thisArg)
    console.log([1,2,3,4].some((item)=>{item < -1})); //false

//find(callbackFn, thisArg)
    console.log([1, 5, 8, 12].find((item)=> item>3)); // 5 -> returns first match value
    console.log([1, 5, 7, 12].find((item)=> item<0)); // undefined

//findIndex(callbackFn, thisArg)
    console.log([1, 5, 8, 12].findIndex((item)=> item>3)); // 1 -> returns first match value
    console.log([1, 5, 7, 12].findIndex((item)=> item<0)); // -1

//findLast(callbackFn, thisArg)
    console.log([1, 5, 8, 12].findLast((item)=> item<10)); // 8 -> returns first match value
    console.log([1, 5, 7, 12].findLast((item)=> item<0)); // undefined

//findLastIndex(callbackFn, thisArg)
    console.log([1, 5, 8, 12].findLastIndex((item)=> item<10)); // 2 -> returns first match value
    console.log([1, 5, 7, 12].findLastIndex((item)=> item<0)); // -1

//map(callbackFn, thisArg)
    console.log([1, 2, 3, 4].map((x) => x ** 2)); //[1, 4, 9, 16]

//slice(start, end)
    console.log([1,3,5,9,6].slice(2)); //[2, 3, 4, 5]
    console.log([1,3,5,9,6].slice(2, 4)); //[3, 4]
    console.log([1,3,5,9,6].slice(1, 5)); //[1, 2, 7, 8, 5]

//Array.from(arrayLike, mapFn, thisArg)
    console.log(Array.from([1, 2, 3], (x) => x + x));

//includes(searchElement, fromIndex)
    console.log([1,2,3].includes(2));  //true

//indexOf(searchElement, fromIndex)
    console.log([1,2,3].indexOf(2));  //1

    console.log([0, 1, 2, [3, 4]].flat()); //[0, 1, 2, 3, 4]
    console.log([0, 1, [2, [3, [4, 5]]]].flat());  // [0, 1, 2, Array [3, Array [4, 5]]]
    //flats to first level only
    console.log([1, 2, 1].flatMap((num) => (num === 2 ? [2, 2] : 1)));    //[1, 2, 2, 1]
    console.log([1, 2, 1].map((num) => (num === 2 ? [2, 2] : 1)).flat()); //same as above

//join(separator)
console.log(['Fire', 'Air', 'Water'].join('-')); //Fire-Air-Water

})();

(() => {
//sort(compareFn)
    let arr = [1,2,3,4]; 
    arr.sort((b,a)=>a-b); 
    console.log(arr); //[4,3,2,1]
})();


(() => {
//Array.of(element1, element2, /* …, */ elementN)
    console.log(Array.of('foo', 2, 'bar', true));  //["foo", 2, "bar", true]
    console.log(Array.of()); //[]
})();
    

(() => {
//array[Symbol.iterator]()
    const arr1 = [5, 12];
    const iter1= arr1[Symbol.iterator]();
    console.log(iter1.next().value) //5
    console.log(iter1.next().value) //12
    console.log(iter1.next().value) //undefined
})();

(() => {
//entries()
    const ents = [5, 12].entries();
    console.log(ents.next().value); //[0,5] -->array of two elements
    console.log(ents.next().value); //[1,12]
    console.log(ents.next().value); //undefined
})();

(() => {
//at(index)
    const arr1 = [5, 12, 8, 4];
    console.log(arr1.at(2)) //8
    console.log(arr1.at(4)) //undefined
    console.log(arr1.at(-1)) //4 (alike python)
    console.log(arr1[-1])//undefined -> note the diff
})();

(() => {
//concat(value1, value2, /* …, */ valueN)
    const arr1 = [5, 12, 8, 4];
    console.log(arr1.concat([1,2,3])) //[5, 12, 8, 4, 1, 2, 3] -> new array
    console.log(arr1.concat(1,2,3)) //[5, 12, 8, 4, 1, 2, 3] works also
    console.log(arr1.concat()) //[5, 12, 8, 4] used for shallow copy
    console.log(arr1.concat([1,2],[3,4], 7,9)) //[5, 12, 8, 4, 1, 2, 3, 4, 7, 9] multiple array/elements

    console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
    console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

    console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
    console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
})();

(() => {
//copyWithin(target, start, end)
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // [4, 5, 3, 4, 5]
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));// [4, 2, 3, 4, 5]
    console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));// [1, 2, 3, 3, 4]
})();

(() => {
//fill(value, start, end)
    console.log([1, 2, 3, 4, 5].fill(9));          // [9, 9, 9, 9, 9]
    console.log([1, 2, 3, 4, 5].fill(9, 1));       // [1, 9, 9, 9, 9]
    console.log([1, 2, 3, 4, 5].fill(9, 1, 2));    // [1, 9, 3, 4, 5]
    console.log([1, 2, 3, 4, 5].fill(9, 1, 1));    // [1, 2, 3, 4, 5]  ignored to fill
    console.log([1, 2, 3, 4, 5].fill(9, -3, -2));  // [1, 2, 9, 4, 5]  5-3, 5-2
    console.log([1, 2, 3, 4, 5].fill(9, -2, -3));  // [1, 2, 3, 4, 5]  ignored to fill
    console.log([1, 2, 3, 4, 5].fill(9, NaN, NaN));// [1, 2, 3, 4, 5]  ignored to fill
    console.log([1, 2, 3, 4, 5].fill(9, 3, 10));    // [1, 2, 3, 9, 9] end ignored(>length)
    console.log(Array(3).fill(4)); // [4, 4, 4]
    // A single object, referenced by each slot of the array:
    const arr = Array(3).fill({}); // [{}, {}, {}]
    arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

})();

(() => {
    let inc = []; 
    [1,4,5].forEach((elem) => inc.push(elem + 5)); 
    console.log(inc); //[6, 9, 10]
})();


(() => {
    console.log([1, 2, 'a', '1a'].toString());   //1,2,a,1a
    const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ];
    console.log(matrix.toString());    //1,2,3,4,5,6,7,8,9
    console.log([1, , 3].toString());  //1,,3
    const arr = [];
    arr.push(1, [3, arr, 4], 2);
    console.log(arr.toString());      //1,3,,4,2

    console.log([1, 'a', new Date('21 Dec 1997 14:12:00 UTC')].toLocaleString('ta', { timeZone: 'IST' }));
    //1,a,21/12/1997, பிற்பகல் 7:42:00

//toReversed()
//toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)
//toSorted(compareFn)

})();

(() => {
//By combining with() with at(), you can both write and read (respectively) an array using negative indices.
//Creating a new array with a single element changed

    console.log([1, 2, 3, 4, 5].with(2,6)); // [1, 2, 6, 4, 5] -> new array
    const  vals = [5, 12].values();
    console.log(vals.next().value); //[5]
    console.log(vals.next().value); //[12]
    console.log(vals.next().value); //undefined

    const keys = ['a', 'b'].keys();
    console.log(keys.next().value); //0
    console.log(keys.next().value); //1
    console.log(keys.next().value); //undefined
})();