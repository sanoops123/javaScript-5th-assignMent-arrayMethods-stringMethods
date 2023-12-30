//create an array 
let array = [1,2,3,4,5,6,7,];
let array2 = ['john lenon','paul McCartney','george harrison','ringo star']
let array3 = ['hai','hello','come on']
const array4 = ['mango','orange','kiwi','pine Apple']

//1.concat
let newArray = array.concat([8,9,10]);
console.log("concatined array:",newArray);

//2.every
let allGreaterThanZero = array.every((num) => num>0);
console.log("Every element greater than zero?",allGreaterThanZero);

//3.fill
let f = array3.fill('hello everyone');
console.log("Filled array:",f);

//4.find
let foundElement = array.find((num) =>{return num > 2});
console.log("First element greater than 1 :",foundElement);

//5.findIndex
let foundIndex = array.findIndex((num) => {return num >= 4});
console.log("index of first element greater than 4 ?",foundIndex);

//6.flat
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log("Flattened array:", flatArray);


//7.forEach
array2.forEach((name)=>{
    console.log("names in array2:",name);
})

//8.Includes
let includesElement  = array.includes(2);
console.log("includes of 2 :",includesElement);

//9.indexOf
let index = array.indexOf(5);
console.log("index of 5 : ",index);

//10.join
let joinedArray = array.join('.');
console.log("joined array :",joinedArray);

//11.lastIndexOf
let lastIndex = array.lastIndexOf(4);
console.log("last index of 4 : ",lastIndex);

//12.Pop
let poppedElement = array.pop();
console.log("popped element :",poppedElement);

//13.Push
array4.push('Grapes');
console.log("pushed array :",array4);

//14.Reverse
array.reverse();
console.log("reversed array :",array);

//15.Unshift
array.unshift(7);
console.log("unshifed array :",array);

//16.Shift
let shiftedElement = array.shift();
console.log("shifted element:",shiftedElement);

//17.slice
let slicedArray = array4.slice(1,3);
console.log("slice array :",slicedArray);

//18.Some
let someGreaterThanTwo = array.some((num) => {return num >= 2});
console.log("some element greater than two ?",someGreaterThanTwo);

//19.Sort
array.sort();
console.log("sorted array :",array);

//20.Splice
let splicedArray = array2.splice(1,2 ,'plum','strawberry');
console.log("splice array :",splicedArray);

//21.Tostring
let stringRepresentation = array.toString()
console.log("array as string:",stringRepresentation);

//22.Filter
let filteredArray = array.filter((num) => num % 2 === 0);
console.log("Filtered array:", filteredArray);
//23.Reduce
let reducedValue = array.reduce((acc,num)=>{
    return acc + num 
})
console.log("Sum of array elements:",reducedValue);

//24.Map
let MapArray = array.map((num)=>{
  return num**2
})
console.log("mapped array :",MapArray);