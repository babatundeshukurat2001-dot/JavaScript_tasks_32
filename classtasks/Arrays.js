const s1 = 70;

const s2 = 85;

const s3 = 92;

console.log(s1 + s2 + s3);

const q = ["Ada" , "Tunde"];
q.push("Zainab");

console.log(q.shift());

q.unshift("Ife");

console.log(q.pop());

console.log(q)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("charry")
console.log(fruits.pop())
console.log(fruits.shift())
fruits.unshift("kiwi");
console.log(fruits)


const names = ["Ada", "Tunde", "Zainab", "Shola"];
console.log(names.includes("Tunde"));
console.log(names.indexOf("Zainab"));
console.log(names.indexOf("Chidi"));
console.log(names.slice(-1,3));
console.log(names.slice(0,2));
console.log(names.concat(["Ife"]));


const a = ["Ade", "Tunde"];
const copy = [...a];
copy.push("Zainab");
console.log(a);
console.log(copy);
const same = a;
console.log(same === a, copy === a);


//
//function reverseArrayInPlace(array) {
//  for (let count = 0; count < Math.floor(array.length / 2); count++) {
//    const index = array.length - 1 - count;       
//    const temp = array[count];                 
//    array[count] = array[index];
//    array[index] = temp;
//  }
//  return array;
//}
//
//const arr = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arr);
//console.log(arr);  





