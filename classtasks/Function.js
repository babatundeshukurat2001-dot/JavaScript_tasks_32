//const greet = function greet(name) {
//
//    console.log(`Hello ${name} `);
//}
//
//greet("shuks")
//
//
//
//function area(w,h){
//
//    return w*h;
//    console.log(w*h)
//
//}
//const total = area(4,5) + area(2,3);
//console.log(total);
//
//    
//
//function addPrint(a,b) {
//console.log(a+b);
//}
//
//function add(a,b){
//return a+b
//}
//const x = addPrint(2,3);
//const y = add(2,3);
//console.log(x,y);
//

// 1. Return the smaller number
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

console.log(min(0, 10));  
console.log(min(0, -10));  

// 2. Return true for even numbers, false
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(50));   
console.log(isEven(75));   

// 3. Return the area of a rectangle
function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(4, 5)); 


function greet(name = "friend"){
    console.log("Hello, " + name + "!" );
}
greet()
greet ("sade");
greet("Ade", "extra", "ignored"); 

function sum(...numbers){
    let total = 0;
    for(const n of numbers) total += n;
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



