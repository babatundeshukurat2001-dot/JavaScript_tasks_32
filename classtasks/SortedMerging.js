//function mergeAndPrint(a, b) {
//
//   let merged = new Array(a.length + b.length);
//
//    for (let count = 0; count < a.length; count++) {
//        merged[count] = a[count];
//    }
//
//    for (let count = 0; count < b.length; count++) {
//        merged[a.length + count] = b[count];
//    }
//
//   
//    merged.sort((a, b) => a - b);
//
//    console.log(merged.join(" "));
//}
//
//
//mergeAndPrint([1,2,3,4], [1,2,5,6,7]); 
//

 
function sortedMerge(a, b) {
    let merged = [];


    let count = 0, index = 0;

   
    while (count < a.length) {

        merged.push(a[count]);

        count++;
    }
    while (index < b.length) {

        merged.push(b[index]);

        index++;
    }

    return merged;
}
console.log(sortedMerge([1,2,3,4], [1,2,5,6,7])); 
