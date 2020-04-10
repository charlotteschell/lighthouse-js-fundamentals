function merge(array1, array2){
  let concatarray = [];
  for (let array of array1){
    concatarray.push(array);
  }
  for (let array of array2){
    concatarray.push(array);
  }
  return concatarray.sort();
}








console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);