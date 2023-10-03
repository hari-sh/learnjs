let nums = [1,2];
console.log(nums[0]); //1
console.log(nums[2]); //undefined
nums[2] = 3;
console.log(nums[2]); //3
//length of array is dynamic
nums[3] = 'hi'
console.log(nums) // (4) [1, 2, 3, 'hi']
//object types in the array are also dynamic
console.log(typeof(nums)) //object -> arrays are also objects
console.log(nums.length) //4
console.log(Array.isArray(nums)) //true

//array properties/functions will be inherited 
//as soon as we use square brackets -> prototypes

//array is a ds to represent a list of items


