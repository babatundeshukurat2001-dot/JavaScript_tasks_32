//return a new reversed array. reverseArray([1,2,3]) gives [3,2,1]

function reverseArray(array) {
  const number = [];
  for (let count = array.length - 1; count >= 0; count--) {
    number.push(array[count]);
  }
  return number;
}
console.log(reverseArray([1, 2, 3]));
