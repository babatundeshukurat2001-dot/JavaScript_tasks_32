 //reverse the given array itself,without making a new one. Hint:swap the first and last items,then move inward. 

function reverseArrayInPlace(array) {

  for (let start = 0, end = array.length - 1; start < end; start++, end--) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
  }
  return array;
}

const arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr); 



