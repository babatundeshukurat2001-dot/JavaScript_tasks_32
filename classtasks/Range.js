//1.range(1,5) gives [1,2,3,4,5]. sum(range(1,10)) gives 55

function range(start, end) {
  const result = [];
  for (let count = start; count <= end; count++) {
    result.push(count);
  }
  return result;
}

function sum(array) {
  let total = 0;
  for (const number of array) {
    total += number;
  }
  return total;
}

console.log(range(1, 5));                
console.log(sum(range(1, 10))); 
